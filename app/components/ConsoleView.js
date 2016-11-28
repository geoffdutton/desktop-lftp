// @flow
import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-desktop/macOs';
import ConsoleMessage from './ConsoleMessage';

export default class ConsoleView extends Component {
  static propTypes = {
    consoleView: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  };

  renderConsoleMessages() {
    const { consoleView } = this.props;
    return consoleView.messages.map((item) => {
      if(!item) {
        return;
      }
      return (
        <ConsoleMessage key={item.id} item={item} />
      )
    });
  }

  render() {
    return (
      <ListView
        width="100%"
        height="200px"
        background="white"
        padding="5px"
      >
        {this.renderConsoleMessages()}
      </ListView>
    );
  }
}
