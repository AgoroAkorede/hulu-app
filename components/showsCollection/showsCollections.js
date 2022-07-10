import React from "react";
import FeaturedTv from "../featuredTv/featuredTv";
import AdultAnimation from "../adultAnimation/adultAnimation";
import { Data,data2 } from "../../data";
import classes from "./showsCollections.module.css";
import Image from "next/image";
import CloseModal from '../../assets/closeModal.svg'

function ShowsCollections({ img, title, content,close }) {
  return (
    <div className={classes.showsCollections}>
      <div className={classes.top}>
        <ul className={classes.list}>
          <li className={classes.title}>{title}</li>
          <li className={classes.close_button} onClick={close}><CloseModal /></li>
        </ul>
        <Image className={classes.img} src={img} layout="responsive" height={1080} width={1920} />
        <h1 className={classes.header}>{title}</h1>
        <article className={classes.content}>{content}</article>
      </div>

      <FeaturedTv results={Data.featuredData} title="FEATURED TV" />
      <FeaturedTv results={Data.adultAnimation} title="ADULT ANIMATION" />
      <FeaturedTv results={Data.FXonHulu} title="FX ON HULU" />
      <FeaturedTv results={Data.RealityTv} title="REALITY TV" />
      <FeaturedTv results={ Data.Binge_WorthyTV } title="BINGE-WORTHY TV" />
      {/* <AdultAnimation  /> */}
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
 

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Data,
    },
  }
}

export default ShowsCollections;
