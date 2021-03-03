import Meta from '../components/template/meta'
import Header from '../components/template/header'
import Footer from '../components/template/footer'
import styles from './template/layout.module.css'

export const siteTitle = 'Formula 1 Stats - Testing App'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Meta />
      <Header home={home} />
      <main>{children}</main>
      <Footer home={home} />
    </div>
  )
}
