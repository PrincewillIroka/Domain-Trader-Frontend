import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Domain Trader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />

      {/* <main className={styles.main}></main> */}
    </div>
  );
}
