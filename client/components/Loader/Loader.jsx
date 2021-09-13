import React from 'react';

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
