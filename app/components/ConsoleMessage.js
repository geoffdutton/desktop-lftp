// @flow
import React, { Component, PropTypes } from 'react';
import { ListViewRow, Text } from 'react-desktop/macOs';

export default class ConsoleMessage extends Component {
  static propTypes = {
    item: PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  };

  render() {
    const { item } = this.props;
    const size = '11';
    return (
      <ListViewRow
        width="100%"
        padding="1px 0"
        margin="0"
        key={`console-message-row-${item.id.toString()}`}
      >
        <Text size={size} color={item.color || 'black'} width="60px">{item.label}</Text>
        <Text size={size} color={item.color || 'black'}>{item.message}</Text>
      </ListViewRow>
    );
  }
}
