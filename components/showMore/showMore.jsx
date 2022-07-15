import React, { useState } from "react";
import "./showMore.module.scss";
import classes from "./showMore.module.scss";
import Thumbnail2 from "../Thumbnail2/Thumbnail2";
import { useRouter } from "next/router";

function ShowMore({ results, clickEvent }) {
  const router = useRouter();
  const [displayContent, setdisplayContent] = useState(true);
  const [displayButton, setdisplayButton] = useState(false);
  const makedisplayContent = () => {
    setdisplayContent(false);
    setdisplayButton(true);
  };
  // console.log(results[ 1 ]);
  let arr = [];
  arr = [
    results[1],
    results[2],
    results[3],
    results[5],
    results[6],
    results[7],
    results[9],
    results[10],
    // results[11],
    // results[13],
  ];

  return (
    <div className={classes.main}>
      {displayButton ? (
        false
      ) : (
        <button className={classes.button} onClick={makedisplayContent}>
          Show More {results.length - 4}+
        </button>
      )}

      {displayContent ? (
        false
      ) : (
        <div id="results" className={classes.results}>
          {arr.map((result) => (
            <div>
              <div
                className={result}
                onClick={() =>
                  router.push(
                    `/shows/${result.id === 0 ? result.id : result.id - 1}`
                  )
                }
              >
                <Thumbnail2
                  className={classes.thumbnail}
                //   key={result.id}
                  result={result}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowMore;
