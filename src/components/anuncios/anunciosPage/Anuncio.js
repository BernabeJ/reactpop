import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import LikeButton from './LikeButton';
import Photo from '../../commons/Photo';
import './Anuncio.css';

const Anuncio = ({ content, updatedAt, user, likes }) => {
  return (
    <article className="anuncio bordered">
      <div className="left">
        <Photo className="anuncio-photo" />
      </div>
      <div className="right">
        <div className="tweet-header">
          <span className="anuncio-name">{user.name}</span>
          <span className="anuncio-username">{user.username}</span>
          <span className="anuncio-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
          <div className="anuncio-actions">
            <LikeButton onLike={event => console.log(event)}>
              {likes.length || null}
            </LikeButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export const anuncioType = {
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  updatedAt: T.string.isRequired,
  content: T.string,
  likes: T.array.isRequired,
};

Anuncio.propTypes = anuncioType;

Anuncio.defaultProps = {
  content: 'Nothing here!',
};

export default Anuncio;
