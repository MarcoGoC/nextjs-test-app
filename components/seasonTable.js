import styles from './table.module.scss'
import Link from 'next/link'


export default function TestTable({ data, total }) {

  const races = data.Races
  const season = data.season

  return (
    <div>
      <table className={styles.responsiveTable}>
        <caption>{total} races</caption>
        <thead >
          <tr >
            <th scope="col">Round</th>
            <th scope="col">Name</th>
            <th scope="col">Track</th>
            <th scope="col">Date</th>
            <th scope="col">Results</th>
            <th scope="col">Review</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race.round}>
              <th scope="row">{race.round}</th>
              <td data-title="Name">{race.raceName}</td>
              <td data-title="Tracks">{race.Circuit.circuitName}</td>
              <td data-title="Date">{race.date}</td>
              <td data-title="Results">
                <Link href={`/season/${season}/${race.round}`}>
                  <a>Results</a>
                </Link>
              </td>
              <td data-title="Review"><a href={race.url} target="_blank">Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
