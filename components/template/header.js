import propTypes from 'prop-types'
import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ home }) {
  return (

    <header className={styles.header}>
      {home ? (
        <>
          <Image priority src="/images/f1_logo.svg" width={130} height={33} alt="F1 logo (tm)" />
          <h1 className="hidden">Formula 1 Stats</h1>
        </>
      ) : (
          <>
            <Link href="/">
              <a className={styles.auto} data-label='Site-Logo' title='Home'>
                <Image priority src="/images/f1_logo.svg" width={130} height={33} alt="F1 logo (tm)" />
              </a>
            </Link>
            <h1 className="hidden">Formula 1 Stats</h1>
          </>
        )}
    </header>
  )
}

Header.defaultProps = {
  home: false
}

Header.propTypes = {

  // inidcates the current page is home (true) otherwise it displays link to the home page
  home: propTypes.bool,
}