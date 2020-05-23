import React from 'react';
import headers from './env/config';

import Tile from './Tile';
import ChatBox from './ChatBox';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messageCount: 3,
      student: {
        name: 'Ethan',
        cohort: 'BLD10',
      },
    };
  }

  componentDidMount() {
    fetch(
      'http://parse.bld.hackreactor.com/chatterbox/classes/messages?order=-createdAt',
      {
        method: 'GET',
        headers,
      },
    )
      .then(res => res.json())
      .then(data => this.setState({ messages: data.results }));
  }

  handleSubmit = msg => {
    fetch(
      'http://parse.bld.hackreactor.com/chatterbox/classes/messages?order=-createdAt',
      {
        method: 'POST',
        headers,
        body: JSON.stringify(msg),
      },
    )
      .then(res => res.json())
      .then(data => {
        const oldMessages = this.state.messages;
        oldMessages.unshift({
          ...msg,
          ...data,
        });

        this.setState({ messages: oldMessages });
      });
  };

  render() {
    const {
      messages,
      messageCount,
      student: { name },
    } = this.state;

    return (
      <div className="app">
        <h1>{name}</h1>
        <ChatBox handleSubmit={this.handleSubmit} />

        <div className="messages-container">
          {messages.slice(0, messageCount).map((msg, idx) => {
            return (
              <Tile
                key={idx}
                idx={idx}
                author={msg.username}
                date={msg.createdAt}
                text={msg.text}
              />
            );
          })}

          {messages.length < messageCount ? null : (
            <h3
              className="load-messages"
              onClick={() => this.setState({ messageCount: messageCount + 3 })}
            >
              Load more messages...
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;
