import styles from '../table.module.scss'
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
          {races.map(({ round, raceName, date, Circuit: { circuitName } }, url) => (
            <tr key={round}>
              <th scope="row">{round}</th>
              <td data-title="Name">{raceName}</td>
              <td data-title="Tracks">{circuitName}</td>
              <td data-title="Date">{date}</td>
              <td data-title="Results">
                <Link href={`/season/${season}/${round}`}>
                  <a>Results</a>
                </Link>
              </td>
              <td data-title="Review"><a href={url} target="_blank">Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
