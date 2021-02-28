import React from 'react';

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <button className="waves-effect waves-light btn">button</button>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default Header;
