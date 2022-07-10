import React from "react";
import Image from "next/image";
import classes from "./styles.module.css";
import robot from "../assets/img/robot.png";
import ArrowLeft from "../assets/arrowleft.svg";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className={classes.errorPage}>
      <h1 className={classes.header}>Error 404</h1>

      <div className={classes.image}>
        <Image src={robot} height={1080} width={1920} objectFit={"contain"} />
      </div>
      <div>Something Went Wrong Fix it now</div>
      <div className={classes.arrow_icon} onClick={() => router.back()}>
        <ArrowLeft />
      </div>
    </div>
  );
}
