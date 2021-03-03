import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>

      <main>

        <h2 className="description">
          Stats from the Formula 1 circus
        </h2>

        <div className="grid">
          <div className="card">
            <Link href="/seasons">
              <a>
                <h3>Seasons</h3>
                <p>Season results</p>
              </a>
            </Link>
          </div>

          <div className="card">
            <Link href="/drivers">
              <a>
                <h3>Drivers</h3>
                <p>All F1 drivers</p>
              </a>
            </Link>
          </div>

          <div className="card">
            <Link href="/constructors">
              <a>
                <h3>Constructors</h3>
                <p>Teams information</p>
              </a>
            </Link>
          </div>

          <div className="card">
            <Link href="/circuits">
              <a>
                <h3>Circuits</h3>
                <p>Tracks information</p>
              </a>
            </Link>
          </div>

        </div>
      </main>


      <style jsx>{`
        .red {
          background-color: #DD0000
        }
        .p-8 { padding: 12px;  display: flex; flex-wrap: nowrap;}

        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 2.0rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
        margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          background-color: #1a7ff336;
          border-color: #0070f3;
        }

        .card h3 {
        margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
        margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card a {
          text-decoration: none;
        }

      `}</style>

    </Layout >
  )
}
