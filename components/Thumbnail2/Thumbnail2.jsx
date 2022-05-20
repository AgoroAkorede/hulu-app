import React from 'react'
import Image from 'next/image'

import classes from './Thumbnail2.module.css';

function Thumbnail2({result}) {
    return (
        <div className={classes.container}>
            <Image
                className={classes.img}
                layout='responsive'
                src={
                    result.imageURl
                }
                
                height={ 1080 } width={ 1920 } 
            />
            <p>{ result.movieTitle }</p>
            <p>{ result.contentRating } • { result.categories }({result.productionYear}) </p>
        </div>
    )
}

export default Thumbnail2
