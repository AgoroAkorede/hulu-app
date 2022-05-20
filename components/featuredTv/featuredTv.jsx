import React from 'react'
import Thumbnail2 from '../Thumbnail2/Thumbnail2'
import classes from './featuredTv.module.css'

function FeaturedTv({ results }) {
   
    return (
        <div>
            <h1 className={classes.title}>FEATURED TV</h1> 
            <div className={ classes.results }>
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
