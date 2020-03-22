import React, { useEffect, useState } from "react";
import { List, Card, Menu } from "antd";
import _ from "lodash";
import { PropsFromRedux } from "./QuestionAnswerHOC";
import { useParams } from "react-router";

const QuestionAnswer: React.FC<PropsFromRedux> = props => {

  const questionAnswerArray = _.values(props.questionAnswers);
  const { topicId } = useParams()

  const [selectedKey, setSelectedKey] = useState("recentActivity")

  useEffect(() => {
    props.getQuestions(topicId ?? "1")
  }, [topicId])
  return (
    <>
      <Menu selectedKeys={[selectedKey]} mode="horizontal">
        <Menu.Item onClick={() => setSelectedKey("recentActivity")} key="recentActivity">
          Recent Activity
        </Menu.Item>
        <Menu.Item onClick={() => setSelectedKey("unanswered")} key="unanswered">
          Unanswered
        </Menu.Item>
      </Menu>
      <List
        grid={{ gutter: 4, column: 1 }}
        dataSource={_.filter(questionAnswerArray, questionAnswer => topicId === "0" ? true : questionAnswer.question.topicId === topicId)}
        renderItem={item => {
          const featuredAnswer = _.find(item.answer, answer => answer.featured);

          if (selectedKey === "unanswered") {
            if (_.isUndefined(featuredAnswer)) {
              console.log(featuredAnswer)
              return (
                <List.Item>
                  <Card title={item.question.questionString}>
                  </Card>
                </List.Item>
              );
            }
            return <List.Item />
          } else {
            if (!_.isUndefined(featuredAnswer)) {
              return (
                <List.Item>
                  <Card title={item.question.questionString}>
                    <b>Answer:</b>
                    <p>{featuredAnswer?.answerString}</p>
                  </Card>
                </List.Item>
              );
            }
            return <List.Item />
          }

        }}
      />
    </>
  );
};

export default QuestionAnswer
