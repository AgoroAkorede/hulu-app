import Head from 'next/head'
import HomepageTop from '../components/homepage-top'
import HomepageMiddle from '../components/homepage-middle'
import SpotlightComponent from '../components/SpotlightTab/SpotlightComponent'
import requests from '../utils/requests'
import Results from '../components/results/Results'
import HomepageFooter from '../components/homepage-footer/homepage-footer'
import Image from "next/image"

import FeaturedTv from '../components/featuredTv/featuredTv'
import {Data} from '../data'

export default function Home({ results }) {
    console.log(Data.featuredData)
    return (
        <div>
            <Head>
                <title>Stream Tv and Movies Live and Online</title>
                <link rel='icon' href='https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png' />
            </Head>
                <HomepageTop />
            <HomepageMiddle results={ results } />
            <SpotlightComponent />
            <HomepageFooter />
            <FeaturedTv results={ Data.featuredData } />
            {/* <FeaturedTv /> */ }
            {/* <Image src={Data.featuredData[0].imageURl} layout='responsive' height={1080} width={1920}  /> */}
           
        </div>
    )
}
export async function getServerSideProps(context) {
    const genre = context.query.genre;

    const request = await fetch(
        `https://api.themoviedb.org/3/${
        requests[ genre ]?.url || requests.fetchTrending.url
        }`
    ).then((response)=>response.json())

    return {
        props:{
            results:request.results
        }
    }
}