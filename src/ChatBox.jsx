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

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="chat-box">
        <input onChange={this.handleChange} />
        <button onClick={() => handleSubmit(this.state)}>Send Message</button>
      </div>
    );
  }
}

export default ChatBox;
