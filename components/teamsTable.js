import styles from './table.module.scss'
import Link from 'next/link'


export default function TeamsTable({ data }) {

  return (
    <div>

      <table className={styles.responsiveTable}>
        <caption>F1 Constructors/Teams Information</caption>
        <thead >
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Wikipedia</th>
          </tr>
        </thead>
        <tbody>
          {data.Constructors.map((team) => (
            <tr key={team.constructorId}>
              <th scope="row">{team.name}</th>
              <td data-title="Nationality">{team.nationality}</td>
              <td data-title="Link"><a target='_blank' href={team.url}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
