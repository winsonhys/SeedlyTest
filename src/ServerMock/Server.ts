import DATA from "./data";
import _ from "lodash";

export default class ServerMock {
  static getTopics = () => DATA.FEATURED_TOPICS;
  static getQuestions = (topicId: string) => {
    if (topicId === "0") {
      return _.flatten(_.values(DATA.TOPIC_QUESTIONS))
    }
    return _.get(DATA.TOPIC_QUESTIONS, [topicId], []);
  }

  static getAnswers = (qnIds: string[]) => _.filter(DATA.TOPIC_ANSWERS, answer => _.includes(qnIds, answer.questionId));
}
