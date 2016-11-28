/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/consoleView';


describe('actions: consoleView', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = spy();
  });

  it('should add an info message', () => {
    actions.info('a message')(dispatch);
    expect(dispatch.firstCall.args[0]).to.deep.equal({
      type: actions.ADD_INFO,
      payload: {
        label: 'Status:',
        message: 'a message',
        color: 'black'
      }
    });
  });

  it('should add an error message', () => {
    actions.error('a message')(dispatch);
    expect(dispatch.firstCall.args[0]).to.deep.equal({
      type: actions.ADD_ERROR,
      payload: {
        label: 'Error:',
        message: 'a message',
        color: 'red'
      }
    });
  });

  it('should add a success message', () => {
    actions.success('a message')(dispatch);
    expect(dispatch.firstCall.args[0]).to.deep.equal({
      type: actions.ADD_SUCCESS,
      payload: {
        label: 'Success:',
        message: 'a message',
        color: 'green'
      }
    });
  });

  it('should clear all message', () => {
    actions.clearAll()(dispatch);
    expect(dispatch.firstCall.args[0]).to.deep.equal({
      type: actions.CLEAR_ALL
    });
  });
});
