import { createAction, ActionType } from "typesafe-actions";
import { Question, Answer } from "./reducer";

export const GET_QUESTION = "GET_QUESTION";
const GET_QUESTION_SUCCESS = "GET_QUESTION_SUCCESS";
export const GET_ANSWER = "GET_ANSWER";
const GET_ANSWER_SUCCESS = "GET_ANSWER_SUCCESS";

export const actions = {
  getQuestion: createAction(GET_QUESTION, (topicId: string) => topicId)(),
  getQuestionsSuccess: createAction(
    GET_QUESTION_SUCCESS,
    (payload: Question[]) => payload
  )(),
  getAnswers: createAction(
    GET_ANSWER,
    (questionIds: string[]) => questionIds
  )(),
  getAnswersSuccess: createAction(
    GET_ANSWER_SUCCESS,
    (payload: Answer[]) => payload
  )()
};

export type ActionTypes = ActionType<typeof actions>;
export default actions;
