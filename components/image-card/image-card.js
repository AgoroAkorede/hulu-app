import React from 'react'
import classes from './image-card.module.css';
import requests from '../../utils/requests'
import {useRouter} from 'next/router'

function ImageCard({ image, title, text }) {
    
    return (
        <button onClick={()=>router.push(`/?genre=${key}`)} className={ classes.image_button }>
            <div className={classes.image_gradient}></div>
        <div className={classes.image_container}>
                <p className={ classes.text }>{text}</p>
                <p className={classes.title}>{title}</p>
            <img className={classes.images} src={image} />
            
            </div>
        </button>
    )
}

export default ImageCard
