import { useRouter } from "next/router";
import { Data } from "../../data";
import Image from "next/image";
import Head from "next/head";
import classes from "./styles.module.css";
import PlayIcon from "../../assets/play.svg";

const Post = () => {
  const router = useRouter();
  const posts = Data.featuredData;

  const post = posts[router.query.movieTitle];
  if (!post) return <p></p>;
  console.log(post.moviedescription);

  return (
    <>
      <Head>
        <title>Stream Tv and Movies Live and Online || movieTitle</title>
        <link
          rel="icon"
          href="https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png"
        />
      </Head>

      <div className={classes.page}>
        <ul className={classes.categories}>
          <li className={classes.header}>{post.movieTitle}</li>
          <li className={classes.categories_content}>
            {post?.productionYear} • {post.categories} • {post?.contentRating}
          </li>
          <li className={classes.categories_content}>
            IMDb Rating :{post?.rating}/10 📈
          </li>
          <li className={classes.categories_content}>
            {post?.movieDescription}
          </li>
        </ul>
        <div className={classes.image_container}>
          <div className={classes.play_icon}>
            <PlayIcon />
          </div>
          <Image
            className={classes.images}
            layout="responsive"
            src={post.imageURl}
            height={1080}
            width={1920}
            objectFit={"contain"}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
