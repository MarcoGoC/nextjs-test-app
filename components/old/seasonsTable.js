import styles from './table.module.scss'
import Link from 'next/link'


export default function SeasonsTable({ data }) {

  return (
    <div>
      <table className={styles.responsiveTable} style={{ minWidth: '15em' }}>
        <caption>F1 Seasons Information</caption>
        <thead >
          <tr >
            <th scope="col">Season</th>
            <th scope="col">Races</th>
            <th scope="col">Wikipedia</th>
          </tr>
        </thead>
        <tbody>
          {data.Seasons.map(({ season, url }) => (
            <tr key={season}>
              <th scope="row">{season}</th>
              <td data-title="Races"><Link href={`/season/${season}`}><a>Race results</a></Link></td>
              <td data-title="Wikipedia"><a href={url} target="_blank">Review</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
