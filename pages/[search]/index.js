import React from 'react'
import Head from 'next/head'
import requests from '../../utils/requests'
import { useRouter } from 'next/router'
import Results from '../../components/results/Results'

import _ from 'lodash';

function prepareForSerializatoin(obj) {
    return _obj.mapValue(obj, value => typeof value === 'undefined' ? null : value);
}

function Search({results}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>search</title>
                <link rel='icon' href='https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png' />
            </Head>
            <div>
                { Object.entries(requests).map(([ key, { title, url } ]) => (
                    <h2
                        onClick={()=>router.push(`search/?genre=${key}`)}
                        key={ key } >{ title }
                    </h2> 
                    
                ))}
                <Results results={results} />
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const genre = context.query.genre;

    const request = await fetch(
        `https://api.themoviedb.org/3/${
        requests[ genre ]?.url || requests.fetchTrending.url
        }`
    ).then((response) => response.json())
console.log(request)

return {
    props: {
      results: request.results,
    },
  }
}
export default Search
