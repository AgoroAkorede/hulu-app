import React, { useEffect, useState  } from "react";
import Thumbnail2 from "../Thumbnail2/Thumbnail2";
import classes from "./featuredTv.module.css";
import Carousel from "../carousel/carousel";
import { useRouter } from "next/router";

function FeaturedTv({ results, title }) {
  const router = useRouter();
  return (
    <div className={classes.featured}>
   
      <div className={ classes.title }>{ title }</div>
      {/* <Carousel props={ results}/> */}
        <Carousel props={results}>
          <div id="results" className={classes.results}>
            {results.map((result) => (
              <div
                onClick={() =>
                  router.push(
                    `/shows/${result.id === 0 ? result.id : result.id - 1}`
                  )
                  // console.log(results.length) 
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
  );
}

export default FeaturedTv;
