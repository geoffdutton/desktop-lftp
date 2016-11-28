import { expect } from 'chai';
import consoleView from '../../app/reducers/consoleView';
import { ADD_SUCCESS, CLEAR_ALL } from '../../app/actions/consoleView';


describe('reducers:', () => {
  describe('consolveView', () => {
    const initState = {
      messages: []
    };

    it('should handle initial state', () => {
      expect(consoleView(undefined, {})).to.deep.equal({
        messages: []
      });
    });

    it('should handle ADD_* message', () => {
      const successMsg = {
        label: 'Success:',
        color: 'green',
        message: 'a message'
      };
      expect(consoleView(initState, { type: ADD_SUCCESS, payload: successMsg }).messages[0])
        .to.deep.equal({
          ...successMsg,
          id: 0
        });
    });

    it('should increment the id for each ADD_* message', () => {
      const successMsg = {
        label: 'Success:',
        color: 'green',
        message: 'another message'
      };
      const firstMsg = {
        ...successMsg,
        message: 'first message',
        id: 0
      };

      expect(consoleView({ messages: [firstMsg] }, {
        type: ADD_SUCCESS,
        payload: successMsg
      }).messages[1])
        .to.deep.equal({
          ...successMsg,
          id: 1
        });
    });

    it('should clear all messages', () => {
      const successMsg = {
        label: 'Success:',
        color: 'green',
        message: 'another message'
      };
      const messages = [
        {
          ...successMsg,
          message: 'first message',
          id: 0
        },
        {
          ...successMsg,
          message: 'blah message',
          id: 1
        },
      ];

      expect(consoleView({ messages }, {
        type: CLEAR_ALL
      }).messages.length).to.eq(0);
    });
  });
});
