import React from 'react'
import Head from 'next/head'
import requests from '../../utils/requests'
import {useRouter} from 'next/router'

function Search() {
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
                        onClick={()=>router.push(`/?genre=${key}`)}
                        key={ key } >{ title }</h2> 
                ))}
            </div>
        </div>
    )
}

export default Search
