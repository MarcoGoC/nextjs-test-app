import styles from './table.module.scss'
import Link from 'next/link'


export default function CircuitsTable({ data }) {

  return (
    <div>

      <table className={styles.responsiveTable}>
        <caption>F1 Circuits Information</caption>
        <thead >
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Locality</th>
            <th scope="col">Country</th>
            <th scope="col">Map</th>
            <th scope="col">Wikipedia</th>
          </tr>
        </thead>
        <tbody>
          {data.Circuits.map(({ circuitId, circuitName, Location: { locality, country, lat, long }, url }) => (
            <tr key={circuitId}>
              <th scope="row">{circuitName}</th>
              <td data-title="Locality">{locality}</td>
              <td data-title="Country">{country}</td>
              <td data-title="Map"><a target='_blank' href={`https://www.google.com/maps/place/${lat},${long}`}>Map</a></td>
              <td data-title="Wikipedia"><a target='_blank' href={url}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
