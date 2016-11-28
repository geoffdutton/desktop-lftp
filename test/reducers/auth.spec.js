import { expect } from 'chai';
import auth from '../../app/reducers/auth';
import { GET_LAST_USED, SET_LAST_USED } from '../../app/actions/auth';


describe('reducers:', () => {
  describe('auth', () => {
    it('should handle initial state', () => {
      expect(auth(undefined, {})).to.deep.equal({
        lastUsed: {
          hostname: '',
          port: 22,
          username: ''
        }
      });
    });

    it('should return an empty string if key does not exist in state', () => {
      expect(auth(undefined, { type: GET_LAST_USED, payload: 'some' })).to.equal('');
    });

    it('should handle SET of an object', () => {
      const newSettings = { some: 'value' };
      expect(auth({}, { type: SET_LAST_USED, payload: newSettings }).lastUsed)
        .to.deep.equal(newSettings);
    });

    it('should not overwrite the lastUsed object when SET', () => {
      const newSettings = { hostname: 'value' };
      expect(auth({ lastUsed: { username: 'auser' } }, { type: SET_LAST_USED, payload: newSettings }).lastUsed)
        .to.deep.equal({ hostname: 'value', username: 'auser' });
    });

    it('should GET a value by a key', () => {
      const newSettings = { lastUsed: { hostname: 'blah' } };
      expect(auth(newSettings, { type: GET_LAST_USED, payload: 'hostname' })).to.equal('blah');
    });
  });
});
