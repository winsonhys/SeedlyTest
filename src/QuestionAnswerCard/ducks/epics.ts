import Server from "../../ServerMock/Server";
import _ from "lodash";
import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { map, filter, concatMap } from "rxjs/operators";
import actions, { ActionTypes, GET_QUESTION, GET_ANSWER } from "./actions";
import { Question, Answer } from "./reducer";

const getQuestionEpic: Epic<ActionTypes, ActionTypes> = action$ =>
  action$.pipe(
    filter(isOfType(GET_QUESTION)),
    concatMap(action => {
      const questionResponse = Server.getQuestions(
        action.payload
      ) as Question[];

      return [
        actions.getQuestionsSuccess(questionResponse),
        actions.getAnswers(
          _.map(questionResponse, question => question.questionId)
        )
      ];
    })
  );

const getAnswerEpic: Epic<ActionTypes, ActionTypes> = action$ =>
  action$.pipe(
    filter(isOfType(GET_ANSWER)),
    map(action => {
      const answerResponse = Server.getAnswers(action.payload) as Answer[];
      return actions.getAnswersSuccess(answerResponse);
    })
  );

export default { getQuestionEpic, getAnswerEpic };
