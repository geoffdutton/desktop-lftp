import { expect } from 'chai';
import lftpCommands, { InitialState } from '../../app/reducers/lftpCommands';
import { CONNECT, SERVER_RESPONSE } from '../../app/actions/lftpCommands';


describe('reducers:', () => {
  describe('lftpCommands', () => {
    const initState = Object.assign({}, InitialState);

    it('should handle initial state', () => {
      expect(lftpCommands(undefined, {})).to.deep.equal(initState);
    });

    it('should handle SERVER_RESPONSE message', () => {
      const message = 'a message';
      const added = lftpCommands(initState, { type: SERVER_RESPONSE, payload: message }).responses[0];
      expect(added.message).to.equal(message);
      expect(added.id).to.equal(0);
      expect(added.timestamp).to.be.a('number');
    });

    it('should increment SERVER_RESPONSE message id', () => {
      const message = 'second';
      initState.response = [{
        id: 0,
        timestamp: new Date().getTime(),
        message: 'first'
      }];
      const responses = lftpCommands(initState, { type: SERVER_RESPONSE, payload: message }).responses;
      expect(responses.length).to.equal(2);
      const added = responses[1];
      expect(added.message).to.equal(message);
      expect(added.id).to.equal(1);
      expect(added.timestamp).to.be.a('number');
    });
  });
});
