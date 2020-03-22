import React, { useEffect } from "react";
import { List, Card } from "antd";
import _ from "lodash";
import { PropsFromRedux } from "./QuestionAnswerHOC";

const QuestionAnswer: React.FC<PropsFromRedux> = props => {

  useEffect(() => {
    props.getQuestions(["1"])
  }, [])

  const questionAnswerArray = _.values(props.questionAnswers);
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={questionAnswerArray}
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
