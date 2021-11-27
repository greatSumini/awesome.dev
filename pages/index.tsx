import Head from 'next/head'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AWESOME.DEV</title>
        <meta name="description" content="가장 AWESOME한 개발 파트너" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AWESOME.<br/>
          DEV
        </h1>
      </main>

      <footer className={styles.footer}>
          contact:
          <a className={styles.code}>010-4413-1261</a>
          <a href="mailto:lead@awesome.dev" className={styles.code}>lead@awesome.dev</a>
      </footer>
    </div>
  )
}
