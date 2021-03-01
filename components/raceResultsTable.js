import styles from './table.module.scss'


export default function RaceResultsTable({ data }) {

  const season = data.season
  const name = data.raceName
  const results = data.Results

  return (
    <div>
      <table className={styles.responsiveTable}>
        <caption>Season {season} {name}</caption>
        <thead >
          <tr >
            <th scope="col">Position</th>
            <th scope="col">Driver</th>
            <th scope="col">Number</th>
            <th scope="col">Nationality</th>
            <th scope="col">Constructor</th>
            <th scope="col">Points</th>
            <th scope="col">Laps</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((position) => (
            <tr key={position.Driver.driverId}>
              <th scope="row">{position.position}</th>
              <td data-title="Driver">{position.Driver.givenName} {position.Driver.familyName}</td>
              <td data-title="Number">{position.number}</td>
              <td data-title="Nationality">{position.Driver.nationality}</td>
              <td data-title="Constructor">{position.Constructor.name}</td>
              <td data-title="Points">{position.points}</td>
              <td data-title="Laps">{position.laps}</td>
              <td data-title="Time">{(position.Time) ? position.Time.time : <span>&nbsp;</span>}</td>
              <td data-title="Status">{position.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
