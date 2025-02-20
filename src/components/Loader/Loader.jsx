import React from 'react';

import './Loader.css';

const Loader = ({children}) => {
    return (
        <div className="loader">
            <h1 className='loader__message'>
                {children}
            </h1>
            <div className="loader__indicator">

            </div>
        </div>
    );
};

export default Loader;