/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/auth';


describe('actions: auth', () => {
  it('should get last used value by key', () => {
    const dispatch = spy();
    actions.getLastUsed('some')(dispatch);
    expect(dispatch.calledWith({
      type: actions.GET_LAST_USED,
      payload: 'some'
    })).to.be.true;
  });

  it('should set last used by key/value', () => {
    const dispatch = spy();
    actions.setLastUsed('some', 'value')(dispatch);
    expect(dispatch.calledWith({
      type: actions.SET_LAST_USED,
      payload: { some: 'value' }
    })).to.be.true;
  });
});
