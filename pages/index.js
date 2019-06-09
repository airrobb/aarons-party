import React, { Component } from "react";
import Head from "next/head";

import content from "../content/home.md";

import "../styles/index.css";

export default class Home extends Component {
  render() {
    return (
      <div className="page">
        <Head>
          <title>Aaron's Party</title>
        </Head>
        <h1 className="page-title">Come get it</h1>
      </div>
    );
  }
}
