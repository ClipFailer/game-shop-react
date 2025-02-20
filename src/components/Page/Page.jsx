import React from 'react';

import './Page.css';

const Page = ({children, className}) => {
    return (
        <div className={`page ${className}`}>
            {children}
        </div>
    );
};

export default Page;