import React from 'react';

const Tile = props => {
  const { text, idx, date, author } = props;

  return (
    <div className="tile">
      <div className="profile-picture">
        <img
          alt="spooky monster"
          src={`https://robohash.org/${idx}?set=set2&size=60x60`}
        />
      </div>
      <div className="message-content">
        <span className="author-details">
          {author ? author : 'Anonymous'}
          <p>{date}</p>
        </span>
        <p>{text ? text : 'User was too frightened to leave a message.'}</p>
      </div>
    </div>
  );
};

export default Tile;
