import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../styles/index.css";
import { tasteTheRainbow } from "../utility/fun";

const rainbow = tasteTheRainbow();

const Tasty = styled.a`
  font-size: 10rem;
  text-align: center;
  transition: text-shadow 0.5s;
  &:hover {
    text-shadow: ${rainbow};
  }

  @media (max-width: 768px) {
    font-size: 13vw;
  }
`;

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Aaron's Party</title>
      </Head>
      <Tasty>Come Get It</Tasty>
    </div>
  );
}
