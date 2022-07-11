import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/hulu.svg";
import Link from "next/link";

function Header() {
  return (
    <div className={classes.main}>
      <Link href="/">
        <div className={classes.title}>
          <Logo />
        </div>
      </Link>
      <button className={classes.button}>Sign Up</button>
    </div>
  );
}

export default Header;
