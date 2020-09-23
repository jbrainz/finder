import React from 'react';
import PropTypes from 'prop-types';
const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        alt='logo'
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-small my-1'>
          More
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
