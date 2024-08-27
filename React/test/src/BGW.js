import React from 'react';
//import PropTypes from 'prop-types';
import logo from './azarashi.jpg';


const BackgroundWrapper = ({ children, style }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    ...style,
  };

  return <div style={backgroundImageStyle}>{children}</div>;
};

// BackgroundWrapper.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   children: PropTypes.node,
//   style: PropTypes.object,
// };

// BackgroundWrapper.defaultProps = {
//   children: null,
//   style: {},
// };

export default BackgroundWrapper;
