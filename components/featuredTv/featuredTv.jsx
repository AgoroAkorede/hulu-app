import React, { useEffect, useState } from "react";
import Thumbnail2 from "../Thumbnail2/Thumbnail2";
import classes from "./featuredTv.module.scss";
import { useRouter } from "next/router";

function FeaturedTv({ results, title }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [length, setLength] = useState(results);

  const [touchPosition, setTouchPosition] = useState(null);
  let [leftArrow, setleftArrow] = useState("none");
  const [ rightArrow, setrightArrow ] = useState("flex");
  
  useEffect(() => {
    setLength(results.length);
  }, [results]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex >= 0) {
      setleftArrow("flex");
    }
    if (currentIndex >= 2) {
      setrightArrow("none");
      // console.log(currentIndex);
    }
  };
  // if(currentIndex>0){setleftArrow('flex')}

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex <= 1) {
      setleftArrow("none");
    }
    if (currentIndex >= 3) {
      setrightArrow("none");
      console.log(currentIndex);
    }
    if ((leftArrow = "none")) setrightArrow("flex");
  };
  // if(leftArrow='none')setrightArrow('flex')

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
      // setleftArrow('flex')
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className={classes.featured}>
      <div className={classes.title}>{title}</div>
      <div className={classes.main}>
        <button
          onClick={prev}
          style={{ display: leftArrow }}
          className={classes.leftArrow}
        >
          ←
        </button>
        <div id="results" className={classes.results}>
          {results.map((result) => (
            <div>
              <div
                className={result}
                style={{
                  transform: `translateX(-${currentIndex * 450}%)`,
                  transition: "all ease-in 1s",
                }}
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
            </div>
          ))}
        </div>
        <button
          onClick={next}
          style={{ display: rightArrow }}
          className={classes.rightArrow}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default FeaturedTv;
