import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = (props) => {
  // const Users = ({users, loading}) =>  {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map((user) => (
          //   <div key={user.id}>{user.login}</div>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.propTypes = {
  user: PropTypes.array.isRequired,
  laoding: PropTypes.bool.isRequired,
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Users;
