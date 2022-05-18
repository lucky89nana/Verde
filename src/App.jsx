import React from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';

function App(props) {
  const { name } = props;
  return (
    <>
      <h1>
        Hello
        {` ${name}`}
      </h1>
      <div>Sup</div>
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Verde Customer',
};

export default hot(App);
