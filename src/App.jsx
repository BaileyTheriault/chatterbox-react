import React from 'react';

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
        headers: {
          'X-Parse-Application-Id': '22f28bc67c6c0f1ab17fa6322ae27550ac0d9502',
          'X-Parse-REST-API-Key': 'c4dffe45d24420f7fadc4757e012c30e899a1915',
        },
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ messages: data.results }));
  }

  increaseMessageCount = () => {
    this.setState({ messageCount: this.state.messageCount + 3 });
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
        <ChatBox />
      </div>
    );
  }
}

export default App;
