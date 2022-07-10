import React, { useState } from "react";
import Thumbnail2 from "../Thumbnail2/Thumbnail2";
import classes from "./adultAnimation.module.css";
import Carousel from "../carousel/carousel";
import { useRouter } from "next/router";

function AdultAnimation({ results, title }) {
  const router = useRouter();
  return (
    <div className={classes.featured}>
      <h1 className={classes.title}>{title}</h1>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Carousel>
          <div id="results" className={classes.results}>
            {results.map((result) => (
              <div
                onClick={() =>
                  router.push(
                    `/shows/${result.id === 0 ? result.id : result.id - 1}`
                  )
                }
              >
                <Thumbnail2
                  className={classes.thumbnail}
                  key={result.id}
                  result={result}
                />
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default AdultAnimation;
