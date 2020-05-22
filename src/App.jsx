import React from 'react';

import headers from './env/config';

import Tile from './components/tile/tile.component';
import ChatBox from './components/chat-box/chat-box.component';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messageCount: 3,
    };
  }

  componentDidMount() {
    fetch(
      'http://parse.bld.hackreactor.com/chatterbox/classes/messages?order=-createdAt',
      {
        method: 'GET',
        headers,
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ messages: data.results }));
  }

  increaseMessageCount = () => {
    this.setState({ messageCount: this.state.messageCount + 3 });
  };

  handleSubmit = message => {
    const data = message;

    fetch('http://parse.bld.hackreactor.com/chatterbox/classes/messages', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
  };

  render() {
    return (
      <div className='app'>
        <h1>React is better than jQuery</h1>

        <div className='messages-container'>
          {this.state.messages
            .slice(0, this.state.messageCount)
            .map((msg, idx) => (
              <Tile
                key={idx}
                idx={idx}
                author={msg.username}
                date={msg.createdAt}
                text={msg.text}
              />
            ))}
          {this.state.messageCount < this.state.messages.length ? (
            <h3 className='load-messages' onClick={this.increaseMessageCount}>
              Load more messages...
            </h3>
          ) : null}
        </div>
        <ChatBox handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
