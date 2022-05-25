import React, { useState } from 'react'
import Thumbnail2 from '../Thumbnail2/Thumbnail2'
import classes from './featuredTv.module.css'

function FeaturedTv({ results, title }) {
    const [ scroll, setScroll ] = useState(0);

    // const nextSlide = () => {
    //     document.getElementById('results').scrollLeft += 700  
    // }
  
    
    // const prevSlide = () => {
    //     document.getElementById('results').scrollLeft -=700
    // }
    const button1=document.querySelectorAll("btnLeft")
   
  
    
    return (
        <div  className={ classes.featured }>
            <button id="btnLeft"  className={ classes.buttonLeft }>←</button>
            <button  className={classes.buttonRight}>→</button>
            <h1 className={classes.title}>{title}</h1> 
            <div  id="results" className={ classes.results }>
            {
                results.map(result => (
                    <div>
                        <Thumbnail2 className={classes.thumbnail} key={ result.id } result={ result } />
                        
                    </div>
                ))
          }
        </div>
        </div>

    )
}

export default FeaturedTv
