import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import featuredTopicsReducer from "../Main/ducks/reducer";
import featuredTopicEpic from "../Main/ducks/epic";
import questionAnswerReducer from "../QuestionAnswerCard/ducks/reducer";
import questionAnswerEpic from "../QuestionAnswerCard/ducks/epics";
import { StateType } from "typesafe-actions";
// import users, { fetchUserEpic } from "./users";

export const rootEpic = combineEpics(featuredTopicEpic, questionAnswerEpic.getAnswerEpic, questionAnswerEpic.getQuestionEpic);

export const rootReducer = combineReducers({
  featuredTopics: featuredTopicsReducer,
  questionAnswers: questionAnswerReducer
  // users
});

export type RootState = StateType<typeof rootReducer>;
