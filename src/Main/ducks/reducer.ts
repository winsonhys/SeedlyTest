import { StateType, getType } from "typesafe-actions";
import actions, { ActionTypes } from "./actions";

export interface FeaturedTopics {
  topicId: string;
  topicName: String;
}

const featuredTopicReducer = (
  state: FeaturedTopics[] = [],
  action: ActionTypes
) => {
  switch (action.type) {
    case getType(actions.getFeaturedTopicsSuccess):
      return state.concat(action.payload);

    default:
      return state;
  }
};

export type FeaturedTopicState = StateType<typeof featuredTopicReducer>;

export default featuredTopicReducer;
