// @flow
import React, { Component, PropTypes } from 'react';
import AuthForm from './AuthForm';
import ConsoleView from './ConsoleView';

export default class Home extends Component {
  static propTypes = {
    // actions
    authActions: PropTypes.objectOf(PropTypes.func).isRequired,
    consoleViewActions: PropTypes.objectOf(PropTypes.func).isRequired,

    // states
    auth: AuthForm.propTypes.auth,
    consoleView: ConsoleView.propTypes.consoleView
  };

  render() {
    const { auth, authActions, consoleViewActions, consoleView } = this.props;

    return (
      <div>
        <AuthForm auth={auth} consoleViewActions={consoleViewActions} {...authActions} />
        <ConsoleView consoleView={consoleView} {...consoleViewActions} />
      </div>
    );
  }
}
