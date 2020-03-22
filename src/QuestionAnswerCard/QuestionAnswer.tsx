import React, { useEffect } from "react";
import { List, Card } from "antd";
import _ from "lodash";
import { PropsFromRedux } from "./QuestionAnswerHOC";
import { useParams } from "react-router";

const QuestionAnswer: React.FC<PropsFromRedux> = props => {

  const questionAnswerArray = _.values(props.questionAnswers);
  const { topicId } = useParams()

  useEffect(() => {
    props.getQuestions([topicId ?? "1"])
  }, [topicId])
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={_.filter(questionAnswerArray, questionAnswer => questionAnswer.question.topicId === topicId)}
      renderItem={item => {
        const featuredAnswer = _.find(item.answer, answer => answer.featured);
        return (
          <List.Item>
            <Card title={item.question.questionString}>
              {featuredAnswer?.answerString}
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default QuestionAnswer
