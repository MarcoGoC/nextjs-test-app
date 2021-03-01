import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = ''
export const siteTitle = 'Formula 1 Stats'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Stats from the Formula 1 circus"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image priority src="/images/f1_logo.svg" width={130} height={33} alt="F1 logo (tm)" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h1>{name}</h1>
          </>
        ) : (
            <>
              <Link href="/">
                <a className={styles.auto}>
                  <Image priority src="/images/f1_logo.svg" width={130} height={33} alt="F1 logo (tm)" />
                </a>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h1>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h1>
            </>
          )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className={styles.footer}>
        Powered by Formula 1
      </footer>

    </div>
  )
}
