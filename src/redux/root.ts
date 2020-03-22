import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import featuredTopicsReducer from "../Main/ducks/reducer";
import featuredTopicEpic from "../Main/ducks/epic";
import { StateType } from "typesafe-actions";
// import users, { fetchUserEpic } from "./users";

export const rootEpic = combineEpics(featuredTopicEpic);

export const rootReducer = combineReducers({
  featuredTopics: featuredTopicsReducer
  // users
});

export type RootState = StateType<typeof rootReducer>;
