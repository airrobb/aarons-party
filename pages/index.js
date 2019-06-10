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
  ${({ touching }) => (touching ? `text-shadow: ${rainbow};` : "")}
  &:hover {
    text-shadow: ${rainbow};
  }

  @media (max-width: 768px) {
    font-size: 16vw;
  }
`;

export default function Home() {
  const [touching, setTouched] = React.useState(false);

  return (
    <div className="page">
      <Head>
        <title>Aaron's Party</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Tasty
        touching={touching}
        onTouchStart={() => setTouched(true)}
        onTouchEnd={() => setTouched(false)}
      >
        Come Get It
      </Tasty>
    </div>
  );
}
