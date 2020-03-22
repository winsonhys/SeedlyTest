import React, { useEffect } from "react";
import { Menu, Layout } from "antd";
import { useHistory, useParams } from "react-router";
import _ from "lodash"
import { PropsFromRedux } from "./MainPageHOC";
import QuestionAnswer from "../QuestionAnswerCard"

const { Sider, Header, Content } = Layout;
const MenuItem = Menu.Item;

interface ComponentProps { }

const NavigationMenu: React.FC<PropsFromRedux & ComponentProps> = ({
  getFeaturedTopics,
  featuredTopics
}) => {
  useEffect(() => {
    getFeaturedTopics();
  }, []);


  const history = useHistory()

  const { topicId } = useParams()
  const onItemClick = (topicId: string) => history.push(`/${topicId}`)

  const allQuestionSidebarItem = <MenuItem key={0} onClick={() => onItemClick("0")}><b>All Questions</b></MenuItem>

  const sidebarItems = featuredTopics.map(featuredTopic => {
    return (
      <MenuItem key={featuredTopic.topicId} onClick={() => onItemClick(featuredTopic.topicId)}>{featuredTopic.topicName}</MenuItem>
    );
  });

  return (
    <Layout>
      <Layout>
        <Sider>
          <Menu mode="inline" defaultSelectedKeys={[topicId ?? "1"]}>{_.concat(allQuestionSidebarItem, sidebarItems)}</Menu>
        </Sider>
        <Content><QuestionAnswer /> </Content>
      </Layout>
    </Layout>
  );
};

export default NavigationMenu;
