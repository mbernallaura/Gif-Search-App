import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsloading(false);
    }

    useEffect(() =>{
        getImages();
        //!Se puede hacer de esta manera
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
    },[])
    
    return {
        images,
        isloading
    }
}
