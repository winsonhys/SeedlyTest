import React, { useEffect } from "react";
import { Menu, Layout } from "antd";
import { useParams, useHistory } from "react-router";
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
  const onItemClick = (topicId: string) => history.push(`/${topicId}`)

  const sidebarItems = featuredTopics.map(featuredTopic => {
    return (
      <MenuItem key={featuredTopic.topicId} onClick={() => onItemClick(featuredTopic.topicId)}>{featuredTopic.topicName}</MenuItem>
    );
  });

  return (
    <Layout>
      <Header>{/* Insert header here */}</Header>
      <Layout>
        <Sider>
          <Menu mode="inline">{sidebarItems}</Menu>
        </Sider>
        <Content><QuestionAnswer /> </Content>
      </Layout>
    </Layout>
  );
};

export default NavigationMenu;
