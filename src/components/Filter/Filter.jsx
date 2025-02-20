import React from 'react';

import '../Category/Category.css';
import Category from "../Category/Category";

import './Filter.css'

const Filter = ({categories, filterCategories, setFilterCategories}) => {

    const [isSelected, setIsSelected] = React.useState(false);

    const addCategory = (category, isActive) => {
        if (!filterCategories.includes(category)) {
            setFilterCategories([...filterCategories, category])
            isActive(true);
        }
    }

    const removeCategory = (event, category, isActive) => {
        event.stopPropagation();
        setFilterCategories(filterCategories.filter((c) =>
            c !== category
        ));
        isActive(false);
    }

    return (
        <>
            <h2 className='filter-title'>
                Categories
                <button
                    className='filter-select'
                    onClick={() => setIsSelected(!isSelected)}
                >
                    &#9660;
                </button>
            </h2>


            <div className={`filter ${isSelected && 'selected'}`}>
                {categories.map((category) =>
                    <Category
                        key={category}
                        addCategory={addCategory}
                        removeCategory={removeCategory}
                    >
                        {category}
                    </Category>
                )}

            </div>
        </>
    );
};

export default Filter;