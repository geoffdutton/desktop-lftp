// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as AuthAction from '../actions/auth';
import * as ConsoleViewAction from '../actions/consoleView';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    consoleView: state.consoleView
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators({ ...AuthAction }, dispatch),
    consoleViewActions: bindActionCreators({ ...ConsoleViewAction }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

