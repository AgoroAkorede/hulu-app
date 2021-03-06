import React, { useState, useRef } from "react";

import classes from "./homepage-middle.module.scss";
import ImageCard from "./image-card/image-card";
import ScrollDown from "../assets/arrowdown.svg";
import ShowsCollections from "./showsCollection/showsCollections";
import SpotlightComponent from "./SpotlightTab/SpotlightComponent";

function HomepageMiddle() {
  const myRef = useRef(null);
  const [displayShow, setDisplayShow] = useState("none");
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className={classes.mainMiddle}>
        <div className={classes.top}>
          <p className={classes.text}>INCLUDED IN ALL PLANS</p>
          <h1 className={classes.title_middle}>All the TV you love</h1>
        </div>
        <p className={classes.normal_text}>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </p>
        <div className={classes.collections} style={{ display: displayShow }}>
          <ShowsCollections
            img="https://hulu-matchmaker.s3.amazonaws.com/attachments/ckig8ajpl0mxx1u41vj24fx1o-bobs-burgers-v2-modal-masthead-1600x900-2x.jpg"
            title="Tv Shows"
            // className={classes.collections}
            content="Watch past seasons of exclusive shows, current-season episodes the day after they air, 40+ acclaimed series from FX, classic favorites, and tons more."
            close={() => setDisplayShow("none")}
          />
        </div>

        <div className={classes.image_library}>
          <ImageCard
            className={classes.images}
            clickEvent={() => setDisplayShow("block")}
            text="Past and Current Seasons"
            title="Tv Shows"
            image="https://www.hulu.com/static/hitch/s3/attachments/ckzix4ce0m28n1k7rwhwjufa7-ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x-full.jpg"
          />
          <ImageCard
            text="News & Classic"
            title="Movies"
            image="https://www.hulu.com/static/hitch/s3/attachments/ckzix6os0m2cl1k7rmtowojwd-cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1-full.jpg"
          />
          <ImageCard
            text="GroundBreaking"
            title="Hulu Originals"
            image="https://www.hulu.com/static/hitch/s3/attachments/ckzix9rkis6t31v5mteb3tnon-ckzix7nm8s6q01v5mrhx8mjms-cktarx0vs0o9q1w7av35olnl8-nine-perfect-strangers-category-poster-tile-294x450-2x-full-full.jpg"
          />
          <ImageCard
            text="Add on"
            title="Premiums"
            image="https://www.hulu.com/static/hitch/s3/attachments/ckzixaonhhgrc1k6w2bn2vte1-cktaw41ct0trg1v5yjb2aysun-billions-category-poster-tile-v1-294x450-2x-full.jpg"
          />
        </div>
        <div>
          <p className={classes.text_middle}>
            HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
          </p>
          <p className={classes.title_middle}>Live TV Makes It Better</p>
          <div className={ classes.context }>
          <p className={classes.normal_text}>
            Make the switch from cable. Get 75+ top channels on Hulu with your
            favorite live sports, news, and events - plus the entire Hulu
            streaming library. With Unlimited DVR, store Live TV recordings for
            up to nine months and fast-forward through your DVR content. Access
            endless entertainment with Disney+ and live sports with ESPN+. All
            three for a new price of $69.99/month.
          </p>

          <p className={classes.small_text}>
            18+ only. Regional restrictions, blackouts and Live TV terms apply.
            Access content from each service separately and access ESPN+ content
            via Hulu. Location data required to watch certain content. Offer
            valid for eligible subscribers only. Unlimited DVR recording is not
            available for on-demand shows.
          </p>
         
          </div>
          <div className={classes.special_text}>view channels in your area</div>

          <div className={classes.scrollDown} onClick={()=>scrollDown(myRef)}>
            <ScrollDown className={classes.icon} />
          </div>
        </div>
      </div>
      <div ref={myRef}>
        <SpotlightComponent />
      </div>
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
  console.log(request);

  return {
    props: {
      results: request.results,
    },
  };
}

export default HomepageMiddle;
