import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Head>
        <title>CHRONOMETER</title>
        <link rel="stylesheet" href="https://use.typekit.net/esn6sey.css" />
      </Head>
      <Header></Header>
      {children}
    </div>
  );
}
