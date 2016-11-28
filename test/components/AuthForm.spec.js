/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { TextInput, ToolbarNav, Button } from 'react-desktop/macOs';
import AuthForm from '../../app/components/AuthForm';


function setup(lastUsed = {}) {
  const actions = {
    setLastUsed: spy(),
    consoleViewActions: {
      info: spy(),
      clearAll: spy()
    }
  };

  const component = shallow(<AuthForm auth={{ lastUsed }} {...actions} />);
  return {
    component,
    actions,
    button: component.find(Button),
    toolbarNav: component.find(ToolbarNav),
    username: component.find(TextInput).at(1),
    hostname: component.find(TextInput).at(0),
    password: component.find(TextInput).at(2),
    port: component.find(TextInput).at(2)
  };
}


describe('AuthForm component', () => {
  describe('lastUsed', () => {
    it('should display empty fields when there is no last used auth', () => {
      const { username, hostname, password, port } = setup({ hostname: '', username: '' });
      expect(username.prop('value')).to.eq('');
      expect(hostname.prop('value')).to.eq('');
      expect(password.prop('value')).to.eq('');
      expect(port.prop('value')).to.eq('');
    });

    it('should display display last used hostname', () => {
      const { username, hostname, password } = setup({ hostname: 'somehost.com', username: '' });
      expect(username.prop('value')).to.eq('');
      expect(hostname.prop('value')).to.eq('somehost.com');
      expect(password.prop('value')).to.eq('');
    });

    it('should display display last used username', () => {
      const { username, hostname, password } = setup({ hostname: '', username: 'auser' });
      expect(username.prop('value')).to.eq('auser');
      expect(hostname.prop('value')).to.eq('');
      expect(password.prop('value')).to.eq('');
    });

    it('should store last used username and hostname on change', () => {
      const { actions, username, hostname } = setup();
      username.simulate('change', { target: { value: 'auser' } });
      hostname.simulate('change', { target: { value: 'hostname.com' } });
      expect(actions.setLastUsed.calledTwice).to.eq(true, 'setSettings called');
      expect(actions.setLastUsed.firstCall.args).to.deep.equal(['username', 'auser']);
      expect(actions.setLastUsed.secondCall.args).to.deep.equal(['hostname', 'hostname.com']);
    });

    it('should store last used empty strings', () => {
      const { actions, username } = setup();
      username.simulate('change', { target: { value: '' } });
      expect(actions.setLastUsed.calledOnce).to.eq(true, 'setSettings called');
      expect(actions.setLastUsed.firstCall.args).to.deep.equal(['username', '']);
    });
  });

  it('should log a info message on connect', () => {
    const { button, actions } = setup({ hostname: 'somehost.com', username: 'auser' });
    button.simulate('click');
    expect(actions.consoleViewActions.clearAll.calledOnce).to.be.true;
    expect(actions.consoleViewActions.info.firstCall.args[0]).to.equal('Attempting to connect to somehost.com...');
  });
});
