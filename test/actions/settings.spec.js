/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/settings';


describe('actions: settings', () => {
  it('should get a value by key', () => {
    const dispatch = spy();
    actions.getSetting('some')(dispatch);
    expect(dispatch.calledWith({
      type: actions.GET,
      payload: 'some'
    })).to.be.true;
  });

  it('should set a key/value', () => {
    const dispatch = spy();
    actions.setSetting('some', 'value')(dispatch);
    expect(dispatch.calledWith({
      type: actions.SET,
      payload: { some: 'value' }
    })).to.be.true;
  });

  it('should set an object of key/values', () => {
    const dispatch = spy();
    actions.setSetting({ some: 'value' })(dispatch);
    expect(dispatch.calledWith({
      type: actions.SET,
      payload: { some: 'value' }
    })).to.be.true;
  });
});
