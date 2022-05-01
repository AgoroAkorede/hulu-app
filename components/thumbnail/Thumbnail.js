import Image from "next/image"

import classes from './Thumbnail.module.css';

function Thumbnail({ result }) {
    const BASE_URL="https://image.tmdb.org/t/p/original/"
    return (
        <div className={classes.container}>
            <Image
                className={classes.img}
                layout='responsive'
                src=
                { `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                height={ 1080 } width={ 1920 } 
                
                />
                 <h2 className={classes.title}>{ result.title || result.original_name }</h2>
        </div>
    )
}

export default Thumbnail
