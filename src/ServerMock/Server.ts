import DATA from "./data";
import _ from "lodash";

export default class ServerMock {
  static getTopics = () => DATA.FEATURED_TOPICS;
  static getQuestions = (topicIds: string[]) =>
    _.get(DATA.TOPIC_QUESTIONS, topicIds, []);
  static getAnswers = (qnIds: string[]) => _.filter(DATA.TOPIC_ANSWERS, answer => _.includes(qnIds, answer.questionId));
}
