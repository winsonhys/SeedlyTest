import Server from "../../ServerMock/Server";
import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { map, filter } from "rxjs/operators";
import actions, { ActionTypes, GET_FEATURED_TOPICS } from "./actions";

const getFeaturedActionEpic: Epic<ActionTypes, ActionTypes> = action$ =>
  action$.pipe(
    filter(isOfType(GET_FEATURED_TOPICS)),
    map(action => {
      // Should be merge map to simulate server call
      const response = Server.getTopics();
      return actions.getFeaturedTopicsSuccess(response);
    })
  );

export default getFeaturedActionEpic;
