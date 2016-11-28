/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/lftpCommands';


describe('actions: lftpCommands', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = spy();
  });

  it('should send CONNECT with user pass and host', () => {
    actions.connect({ username: 'bill', password: 'test', hostname: 'host' })(dispatch);
    console.log(dispatch.firstCall.args);
    expect(dispatch.calledWith({
      type: actions.CONNECT,
      payload: { username: 'bill', password: 'test', hostname: 'host' }
    })).to.be.true;
  });

  it('should send a SERVER_RESPONSE message', () => {
    actions.serverResponse('a message')(dispatch);
    console.log(dispatch.firstCall.args);
    expect(dispatch.calledWith({
      type: actions.SERVER_RESPONSE,
      payload: 'a message'
    })).to.be.true;
  });
});
