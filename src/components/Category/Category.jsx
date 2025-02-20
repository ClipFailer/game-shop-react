import React from 'react';

import './Category.css';

const Category = ({children, addCategory, removeCategory, inactive}) => {

    const [isActive, setIsActive] = React.useState(false);

    return (
        <span
            className={`category`}
            onClick={(event) => {
                event.preventDefault();
                !inactive &&
                    addCategory(children, setIsActive)
            }}
        >
            {children}
            {isActive &&
                <button
                    className='active'
                    onClick={(e) => removeCategory(e, children, setIsActive)}
                >
                    &#10006;
                </button>
            }
        </span>
    );
};

export default Category;