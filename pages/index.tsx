import Head from "next/head";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AWESOME.DEV</title>
        <meta name="description" content="CRM · 그룹웨어 전문 외주개발사" />
        <meta property="og:title" content="AWESOME.DEV" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://awesome.dev" />
        <meta
          property="og:description"
          content="CRM · 그룹웨어 전문 외주개발사"
        />
        <meta property="og:image" content="/images/OG.png" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AWESOME.
          <br />
          DEV
        </h1>

        <p className={styles.description}>CRM · 그룹웨어 전문 외주개발사</p>
        <br />

        <ul style={{ textAlign: "center", listStyleType: "none", padding: 0 }}>
          <li>Big-Tech 출신 인력이 직접 개발</li>
          <li>개인정보/보안 완벽 대응</li>
          <li>실시간 작업 공유/배포</li>
          <li>무제한, 무료 하자보수 100% 보증</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        contact:
        <a className={styles.code}>+82 10 4413 1261</a>
        <a href="mailto:lead@awesome.dev" className={styles.code}>
          lead@awesome.dev
        </a>
      </footer>
    </div>
  );
}
