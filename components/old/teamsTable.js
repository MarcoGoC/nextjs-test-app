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
          {data.Constructors.map(({ constructorId, name, nationality, url }) => (
            <tr key={constructorId}>
              <th scope="row">{name}</th>
              <td data-title="Nationality">{nationality}</td>
              <td data-title="Link"><a target='_blank' href={url}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
