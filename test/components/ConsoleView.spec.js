/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
// import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import ConsoleView from '../../app/components/ConsoleView';
import ConsoleMessage from '../../app/components/ConsoleMessage';


function setup(messages = []) {
  // const actions = {
  //   setLastUsed: spy()
  // };
  const component = shallow(<ConsoleView consoleView={{messages}} />);
  return {
    component,
    messages: component.find(ConsoleMessage),
  };
}


describe('ConsoleView component', () => {
  it('should display nothing by default', () => {
    const { messages } = setup();
    expect(messages.length).to.eq(0);
  });

  it('should append console messages', () => {
    const { messages } = setup([<ConsoleMessage label="Hey:" message="Sup" color="black" id={0} />]);
    expect(messages.length).to.eq(1);
  });
});
