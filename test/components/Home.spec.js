/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';
import AuthForm from '../../app/components/AuthForm';


function setup(lastUsed = {}) {
  const actions = {
    setLastUsed: spy()
  };
  const component = shallow(<Home
    consoleView={{ messages: [] }}
    auth={{ lastUsed }}
    {...actions}
  />);
  return {
    component,
    actions,
    authForm: component.find(AuthForm)
  };
}


describe('Home component', () => {
  it('should have one auth form', () => {
    const { authForm } = setup();
    expect(authForm.length).to.equal(1);
  });
});
