import Head from "next/head";
import HomepageTop from "../components/homepage-top";
import HomepageMiddle from "../components/homepage-middle";
import SpotlightComponent from "../components/SpotlightTab/SpotlightComponent";
import requests from "../utils/requests";
import HomepageFooter from "../components/homepage-footer/homepage-footer";

import { Data } from "../data";


export default function Home({ results }) {
  console.log(Data.featuredData);
  return (
    <div>
      <Head>
        <title>Stream Tv and Movies Live and Online</title>
        <link
          rel="icon"
          href="https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png"
        />
      </Head>
      <HomepageTop />
      <HomepageMiddle results={results} />
      <SpotlightComponent />
      <HomepageFooter />
      
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3/${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
