import React, { useState } from 'react';

const AddCategory = ( {setCategories, categories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
    setInputValue(e.target.value);
}


const handleSubmit = (e, value) => {

    e.preventDefault();
    if (inputValue.trim().length > 2 ){
        console.log('se insertó a la lista');
        setCategories([...categories,inputValue]);


    }  
}
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <h2>Add category</h2>
            <h1 className="card-grid">{inputValue}</h1>
            <input
                value={inputValue}
                onChange={ handleInputChange } 
            />
            </form>
        </>
     );
}
 
export default AddCategory;