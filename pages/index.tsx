import type { NextPage } from "next";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const quoteapi = "https://zenquotes.io/api/quotes/";

interface Quotes {
  q: string;
  a: string;
}

interface Props {
  quotes: Quotes[];
}

const Home: NextPage<Props> = (props: Props) => {
  const randomIndex = Math.floor(Math.random() * props.quotes.length);
  const quote = props.quotes[randomIndex];

  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center py-2">
      <Head>
        <title>Inspire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-mono text-[18px]">
        I want to inspire and brighten your day!
      </div>
      <div className="mt-[100px] text-[20px]">
        <div>"{quote.q}"</div>
        <div>- {quote.a}</div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(quoteapi);
  const data = await res.json();

  return {
    props: { quotes: data },
  };
};

export default Home;
