import { createAction, ActionType } from "typesafe-actions";
import { FeaturedTopics } from "./reducer";

export const GET_FEATURED_TOPICS = "GET_FEATURED_TOPICS";
const GET_FEATURED_TOPICS_SUCCESS = "GET_FEATURED_TOPICS_SUCCESS";

export const actions = {
  getFeaturedTopics: createAction(GET_FEATURED_TOPICS)(),
  getFeaturedTopicsSuccess: createAction(
    GET_FEATURED_TOPICS_SUCCESS,
    (payload: FeaturedTopics[]) => payload
  )()
};

export type ActionTypes = ActionType<typeof actions>;
export default actions;
