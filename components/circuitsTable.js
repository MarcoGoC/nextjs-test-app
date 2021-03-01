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
          {data.Circuits.map((circuit) => (
            <tr key={circuit.circuitId}>
              <th scope="row">{circuit.circuitName}</th>
              <td data-title="Locality">{circuit.Location.locality}</td>
              <td data-title="Country">{circuit.Location.country}</td>
              <td data-title="Link"><a target='_blank' href={`https://www.google.com/maps/place/${circuit.Location.lat},${circuit.Location.long}`}>Map</a></td>
              <td data-title="Link"><a target='_blank' href={circuit.url}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
