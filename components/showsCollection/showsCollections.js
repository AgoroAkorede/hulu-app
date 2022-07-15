import React,{useState} from "react";
import FeaturedTv from "../featuredTv/featuredTv";
import AdultAnimation from "../adultAnimation/adultAnimation";
import { Data, data2 } from "../../data";
import classes from "./showsCollections.module.scss";
import Image from "next/image";
import CloseModal from "../../assets/closeModal.svg";
import ShowMore from "../showMore/showMore";

function ShowsCollections({ img, title, content, close }) {

  return (
    <div className={classes.showsCollections}>
      <div className={classes.top}>
        <ul className={classes.list}>
          <li className={classes.title}>{title}</li>
          <li className={classes.close_button} onClick={close}>
            <CloseModal />
          </li>
        </ul>
        <img src={img} className={classes.img} />
        <h1 className={classes.header}>{title}</h1>
        <article className={classes.content}>{content}</article>
      </div>

      <FeaturedTv
        className={classes.featured}
        results={Data.featuredData}
        title="FEATURED TV"
      />
 
        <ShowMore results={Data.featuredData}  />

      <FeaturedTv
        className={classes.featured}
        results={Data.adultAnimation}
        title="ADULT ANIMATION"
      />
      <ShowMore results={ Data.adultAnimation } />
      
      <FeaturedTv
        className={classes.featured}
        results={Data.FXonHulu}
        title="FX ON HULU"
      />
      <ShowMore results={ Data.FXonHulu } />
      
      <FeaturedTv
        className={classes.featured}
        results={Data.RealityTv}
        title="REALITY TV"
      />
      <ShowMore results={ Data.RealityTv } />
      
      <FeaturedTv
        className={classes.featured}
        results={Data.Binge_WorthyTV}
        title="BINGE-WORTHY TV"
      />

      <ShowMore results={ Data.Binge_WorthyTV } />
      
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      Data,
    },
  };
}

export default ShowsCollections;
