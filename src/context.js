import React, { Component } from 'react';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: 'Hello',
    name: 'Emiliano',
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };