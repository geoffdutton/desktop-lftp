import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { TextInput } from 'react-desktop/macOs';
import HomePage from '../../app/containers/HomePage';
import configureStore from '../../app/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  return {
    app,
    inputs: app.find(TextInput)
  };
}


describe('containers', () => {
  describe('HomePage', () => {
    it('should display LFTP entry form', () => {
      const { inputs } = setup();
      expect(inputs).to.be.lengthOf(4);
    });
  });
});
