import _ from "lodash";
import { StateType, getType } from "typesafe-actions";
import actions, { ActionTypes } from "./actions";

export interface Question {
  questionId: string;
  questionString: string;
}

export interface Answer {
  answerId: string;
  questionId: string;
  userId: string;
  answerString: string;
  featured: boolean;
}

export interface QuestionAnswer {
  [questionId: string]: {
    question: Question;
    answer: Answer[];
  };
}

const questionAnswerReducer = (
  state: QuestionAnswer = {},
  action: ActionTypes
) => {
  switch (action.type) {
    case getType(actions.getQuestionsSuccess):
      var newQuestionAnswer = state;
      _.forEach(action.payload, question => {
        console.log(newQuestionAnswer)
        const answerForQuestion = _.get(
          newQuestionAnswer,
          `${question.questionId}.answer`,
          []
        ) as Answer[];
        newQuestionAnswer = {
          ...newQuestionAnswer,
          [question.questionId]: {
            question,
            answer: answerForQuestion
          }
        };
      });
      return { ...state, ...newQuestionAnswer };

    case getType(actions.getAnswersSuccess):
      var newQuestionAnswers = state;
      console.log("success", newQuestionAnswers)
      console.log(newQuestionAnswers)
      _.forEach(action.payload, answer => {
        console.log(answer)
        newQuestionAnswers[answer.questionId].answer.push(answer);
      });
      return newQuestionAnswers;

    default:
      return state;
  }
};

export type FeaturedTopicState = StateType<typeof questionAnswerReducer>;

export default questionAnswerReducer;
