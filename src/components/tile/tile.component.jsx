import React from 'react';
import moment from 'moment';

import './tile.styles.scss';

const Tile = props => (
  <div className='tile'>
    <div className='profile-picture'>
      <img
        alt='spooky monster'
        src={`https://robohash.org/${props.idx}?set=set2&size=60x60`}
      />
    </div>
    <div className='message-content'>
      <span className='author-details'>
        {props.author ? props.author : 'Anonymous'}
        <p>{moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </span>
      <p>
        {props.text
          ? props.text
          : 'User was too frightened to leave a message.'}
      </p>
    </div>
  </div>
);

export default Tile;
