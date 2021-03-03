import styles from './layout.module.css'
import Link from 'next/link'


export default function Footer({ home }) {
  return (
    <>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a title="Back to home page">← Back to home</a>
          </Link>
        </div>
      )}

      <footer className={styles.footer}>
        Powered by Formula 1
      </footer>
    </>
  )
}

Footer.defaultProps = {
  home: false
}
