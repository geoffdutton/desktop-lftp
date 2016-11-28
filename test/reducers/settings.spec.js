import { expect } from 'chai';
import settings from '../../app/reducers/settings';
import { GET, SET } from '../../app/actions/settings';


describe('reducers:', () => {
  describe('settings', () => {
    it('should handle initial state', () => {
      expect(settings(undefined, {})).to.deep.equal({});
    });

    it('should handle SET of an object', () => {
      const newSettings = { some: 'value', redfish: 'bluefish' };
      expect(settings({}, { type: SET, payload: newSettings })).to.deep.equal(newSettings);
    });

    it('should GET a value by a key', () => {
      const newSettings = { some: 'value', redfish: 'bluefish' };
      expect(settings(newSettings, { type: GET, payload: 'some' })).to.equal('value');
    });
  });
});
