// @flow
import React, { Component, PropTypes } from 'react';
import { TextInput, ToolbarNav, Button, Label } from 'react-desktop/macOs';

export default class AuthForm extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      lastUsed: PropTypes.shape({
        hostname: PropTypes.string,
        username: PropTypes.string,
        port: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    }),
    setLastUsed: PropTypes.func.isRequired,
    consoleViewActions: PropTypes.objectOf(PropTypes.func).isRequired
  };

  state = {
    password: ''
  };

  doConnect() {
    const { consoleViewActions, auth } = this.props;
    consoleViewActions.clearAll();
    consoleViewActions.info(`Attempting to connect to ${auth.lastUsed.hostname}...`);
  }

  render() {
    const { auth, setLastUsed } = this.props;
    const lastUsed = auth.lastUsed;

    const toolbarNavProps = {
      height: '40px',
      width: '100%'
    };

    const textInputProps = {
      width: '100px',
      margin: '0 8px'
    };

    const onTextInputChange = (which, e) => {
      if (e && e.target && typeof e.target.value === 'string') {
        setLastUsed(which, e.target.value);
      }
    };

    return (
      <ToolbarNav {...toolbarNavProps}>
        <Label marginLeft="8px">Host:</Label>
        <TextInput
          {...textInputProps}
          width="130px"
          value={lastUsed.hostname}
          onChange={(e) => onTextInputChange('hostname', e)}
        />
        <Label>Username:</Label>
        <TextInput
          {...textInputProps}
          value={lastUsed.username}
          onChange={(e) => onTextInputChange('username', e)}
        />
        <Label>Password:</Label>
        <TextInput
          {...textInputProps}
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <Label>Port:</Label>
        <TextInput
          {...textInputProps}
          width="50px"
          value={lastUsed.port}
          onChange={(e) => onTextInputChange('port', e)}
        />
        <Button onClick={this.doConnect.bind(this)}>Connect</Button>
      </ToolbarNav>
    );
  }
}
