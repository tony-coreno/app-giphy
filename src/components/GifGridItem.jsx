import React from 'react';

const GifGridItem = ({title, url}) => {
   
    return ( 

        <>
            <img src={ url } alt = { title } />
            <p>{ title }</p>
        </>

     );
}
 
export default GifGridItem;