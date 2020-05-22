import React from 'react';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Bailey',
      text: '',
      roomname: 'Lobby',
    };
  }

  handleInput = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='chat-box'>
        <input onChange={this.handleInput} />
        <button
          onClick={() => {
            this.props.handleSubmit(this.state);
          }}
        >
          Send Message
        </button>
      </div>
    );
  }
}

export default ChatBox;
