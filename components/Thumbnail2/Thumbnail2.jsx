import React from "react";
import Image from "next/image";

import classes from "./Thumbnail2.module.scss";

function Thumbnail2({ result }) {
  return (
    <div className={classes.container}>
      {/* <div className={classes.image_gradient}></div> */}
      <Image
        className={classes.img}
        layout="responsive"
        src={result?.imageURl}
        height={1080}
        width={1920}
      />
      <p className={classes.title}>{result?.movieTitle}</p>
      <p className={classes.content}>
        {result?.contentRating} • {result?.categories}({result?.productionYear}){" "}
      </p>
      {result?.originality === true ? (
        <img
          className={classes.originalHulu}
          alt="originality"
          src="https://img4.hulu.com/user/v3/artwork/f812637b-6186-48e4-9b63-85167ba2cf17?base_image_bucket_name=image_manager&base_image=61c3252e-80dd-41a0-a677-18992b9cb186&size=100x100&format=png"
        />
      ) : null}
    </div>
  );
}

export default Thumbnail2;
