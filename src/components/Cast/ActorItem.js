import React from 'react';
import defaultPicture from '../../Pictures/Not_found_the_recipient-no_found-person-user-search-searching-4-512.webp';
import PropTypes from 'prop-types';
const ActorItem = ({ profile_path, name, character }) => {
  return (
    <li>
      {profile_path ? (
        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
      ) : (
        <img width="150" src={defaultPicture} alt="" />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
ActorItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
export default ActorItem;
