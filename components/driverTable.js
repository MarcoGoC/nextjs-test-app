import styles from './table.module.scss'


export default function DriverTable({ data, total }) {

  const seasons = data.StandingsLists
  const driver = data.StandingsLists
  // console.log(data.driverId)
  // console.log(total)
  // console.log(data.StandingsLists)
  // console.log(data.StandingsLists[0].season)
  // console.log(data.StandingsLists[0].round)
  // //console.log(data.StandingsLists[0].DriverStandings)
  // console.log(data.StandingsLists[0].DriverStandings[0].position)
  // console.log(data.StandingsLists[0].DriverStandings[0].points)
  // console.log(data.StandingsLists[0].DriverStandings[0].wins)
  // //console.log(data.StandingsLists[0].DriverStandings[0].Constructors)
  // console.log(data.StandingsLists[0].DriverStandings[0].Constructors[0].name)

  return (
    <div>
      <table className={styles.responsiveTable}>
        <caption>{total} Seasons</caption>
        <thead >
          <tr >
            <th scope="col">Season</th>
            <th scope="col">Rounds</th>
            <th scope="col">Points</th>
            <th scope="col">Position</th>
            <th scope="col">Wins</th>
            <th scope="col">Constructor</th>
          </tr>
        </thead>
        <tbody>
          {seasons.map((season) => (
            <tr key={season.season}>
              <th scope="row">{season.season}</th>
              <td data-title="Rounds">{season.round}</td>
              {season.DriverStandings.map((standing) => (
                <>
                  <td data-title="Points">{standing.points}</td>
                  <td data-title="Position">{standing.position}</td>
                  <td data-title="Wins">{standing.wins}</td>
                  <td data-title="Constructor">
                    {standing.Constructors.map((constructor) => (
                      <span key={constructor.name}>{constructor.name} </span>
                    ))}
                  </td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  )
}
