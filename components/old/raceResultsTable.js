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
          {results.map(({ position, Driver: { driverId, givenName, familyName, nationality }, Constructor: { name }, number, points, laps, Time, status }) => (
            <tr key={driverId}>
              <th scope="row">{position}</th>
              <td data-title="Driver">{givenName} {familyName}</td>
              <td data-title="Number">{number}</td>
              <td data-title="Nationality">{nationality}</td>
              <td data-title="Constructor">{name}</td>
              <td data-title="Points">{points}</td>
              <td data-title="Laps">{laps}</td>
              <td data-title="Time">{(Time) ? Time.time : <span>&nbsp;</span>}</td>
              <td data-title="Status">{status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
