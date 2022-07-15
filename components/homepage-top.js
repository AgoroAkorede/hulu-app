import Header from "./Header/Header";
import classes from './homepage-top.module.scss';

function HomepageTop() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <p className={classes.text}>BUNDLE WITH ANY HULU PLAN & SAVE</p>
        <div className={classes.logos}>
          <img
            className={classes.logo_image}
            src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png"
            alt="logos"
          />
        </div>
        <div className={classes.page_title}>
          Get The endless entertainment, live sports, and the shows and movies
          you love.
        </div>
        <button className={classes.button}>Get The Disney Bundle</button>
        <p className={classes.special_text}>Sign up for Hulu only</p>
      </div>
    </div>
  );
}
export default HomepageTop;
