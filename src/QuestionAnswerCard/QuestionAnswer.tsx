import React, { useEffect } from "react";
import { List, Card } from "antd";
import _ from "lodash";
import { PropsFromRedux } from "./QuestionAnswerHOC";
import { useParams } from "react-router";

const QuestionAnswer: React.FC<PropsFromRedux> = props => {

  const questionAnswerArray = _.values(props.questionAnswers);
  const { topicId } = useParams()

  useEffect(() => {
    props.getQuestions(topicId ?? "1")
  }, [topicId])
  return (
    <List
      grid={{ gutter: 4, column: 1 }}
      dataSource={_.filter(questionAnswerArray, questionAnswer => topicId === "0" ? true : questionAnswer.question.topicId === topicId)}
      renderItem={item => {
        const featuredAnswer = _.find(item.answer, answer => answer.featured);
        return (
          <List.Item>
            <Card title={item.question.questionString}>
              <b>Answer:</b>
              <p>{featuredAnswer?.answerString}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default QuestionAnswer
