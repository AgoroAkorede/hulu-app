
import Thumbnail from '../thumbnail/Thumbnail'
function Results({results}) {
    return (
        <div>
            { results.map(result => (
                <div>
                <Thumbnail key={result.id} result={result} />

                <h2>{ result.title || result.original_name }</h2>
                <p>Release Date: { result.release_date || result.first_air_date }</p>
                    <p>{Math.round(result.popularity * 1000) } views</p>
                <p>{ result.overview }</p>
                    <p>IMDB rating: { result.vote_average }</p>
                 </div>   
            ))}
        </div>
    )
}

export default Results
