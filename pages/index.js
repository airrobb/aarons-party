import React, { Component } from "react";
import Head from "next/head";

import "../styles/index.css";
import { tasteTheRainbow } from "../utility/fun";

const rainbow = tasteTheRainbow();

export default function Home() {
  const [hovering, setHover] = React.useState(false);

  return (
    <div className="page">
      <Head>
        <title>Aaron's Party</title>
      </Head>
      <h1
        className="page-title"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ textShadow: hovering ? rainbow : null }}
      >
        Come Get It
      </h1>
    </div>
  );
}
