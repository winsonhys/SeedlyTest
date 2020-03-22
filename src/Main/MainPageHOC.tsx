import actions from "./ducks/actions";
import { RootState } from "../redux/root";
import { connect, ConnectedProps } from "react-redux";
import Component from "./MainPage";

const mapDispatchToProps = { getFeaturedTopics: actions.getFeaturedTopics };

const mapStateToProps = (state: RootState) => {
  return { featuredTopics: state.featuredTopics };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Component);
