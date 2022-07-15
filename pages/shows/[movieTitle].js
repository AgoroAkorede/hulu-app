import { useRouter } from "next/router";
import { Data, data2 } from "../../data";
import Image from "next/image";
import Head from "next/head";
import classes from "./styles.module.scss";
import PlayIcon from "../../assets/play.svg";
import ArrowLeft from "../../assets/arrowleft.svg";
import ArrowRight from "../../assets/arrowright.svg";
import Header from "../../components/Header/Header";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const posts = data2;
  const post = posts[router.query.movieTitle];
  if (!post) return <p></p>;
  let page = router.query.movieTitle

  return (
    <>
      <Head>
        <title>{post.movieTitle}</title>
        <link
          rel="icon"
          href="https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png"
        />
      </Head>

      <Header />
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
        {/* <Link
          href={`/shows/${parseInt(page) - 1}`}
        >
          <div className={classes.icon}>
            <ArrowLeft />
          </div>
        </Link>
        <Link
          href={`/shows/${parseInt(page) + 1}`}
        >
          <div className={classes.icon2}>
            <ArrowRight />
          </div>
        </Link> */}
      </div>
    </>
  );
};

export default Post;
