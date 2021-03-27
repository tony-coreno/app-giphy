import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

    const[images,setImages] = useState([]);

    useEffect( ()=>{
        getGifs();
    },[])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category)}&limit=5&api_key=QC3hdNo8y3n6ES4J1kxIsqEd9S0qy05X`
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const gifs = data.map( img =>{

            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })
        console.log(gifs);
        setImages(gifs);
    }

    return ( 
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map( (img) =>{
                        return(
                            <GifGridItem
                                key={img.id} 
                                { ...img }
                                 
                            />
                    )})
                }
            </ol>
        
        </>
     );
}
 
export default GifGrid;