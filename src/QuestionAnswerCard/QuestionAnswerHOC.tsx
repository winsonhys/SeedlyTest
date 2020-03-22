import actions from "./ducks/actions";
import { RootState } from "../redux/root";
import { connect, ConnectedProps } from "react-redux";
import Component from "./QuestionAnswer";

const mapDispatchToProps = { getQuestions: actions.getQuestion };

const mapStateToProps = (state: RootState) => {
  return { questionAnswers: state.questionAnswers };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Component);
