
import Thumbnail from '../thumbnail/Thumbnail'
import classes from './Results.module.css';
function Results({results}) {
    return (
        <div className={classes.results}>
            { results.map(result => (
                <div>
                    
                        <Thumbnail className={ classes.thumbnail } key={ result.id } result={ result } />
                   
                    <div className={classes.more_info}>
                        <p>Release Date: { result.release_date || result.first_air_date }</p>
                        <p>{Math.round(result.popularity * 100) } views</p>
                    {/* <p>{ result.overview }</p> */}
                        <p>IMDB rating: { result.vote_average }</p>
                    </div>
                
                 </div>   
            ))}
        </div>
    )
}

export default Results
