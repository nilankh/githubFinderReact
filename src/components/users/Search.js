import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
// const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      props.setAlert('Please Enter Something', 'light');
    } else {
      props.searchUsers(text);
      setText({ text: '' });
    }
  };

  // const { showClear, clearUsers } = this.props;
  // aise destructure kre v use kr skte ho
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={props.text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {props.showClear && (
        <button
          className="btn btn-light btn-block"
          onClick={props.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
