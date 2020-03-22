import DATA from "./data";
export default class ServerMock {
  static getTopics = () => DATA.FEATURED_TOPICS;
}
