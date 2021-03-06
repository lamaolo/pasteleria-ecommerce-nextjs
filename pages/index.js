import Head from "next/head";
import fetch from "isomorphic-fetch";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Contact from "../components/Contact";

export const getStaticProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/products`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      <Products products={data.products} />
      <Contact />
    </Layout>
  );
}
