import styles from './table.module.scss'
import Link from 'next/link'


export default function DriversTable({ data }) {

  return (
    <div>

      <table className={styles.responsiveTable}>
        <caption>F1 Drivers Information</caption>
        <thead >
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Number</th>
            <th scope="col">DOB</th>
            <th scope="col">Nationality</th>
            <th scope="col">Career</th>
            <th scope="col">Bio</th>
          </tr>
        </thead>
        <tbody>
          {data.Drivers.map(({ driverId, givenName, familyName, code, permanentNumber, dateOfBirth, nationality, url }) => (
            <tr key={driverId}>
              <th scope="row" className="link"><Link href={`/driver/${driverId}`}><a>{givenName} {familyName}</a></Link></th>
              <td data-title="Code">{(code) ? code : <span>&nbsp;</span>}</td>
              <td data-title="Number">{(permanentNumber) ? permanentNumber : <span>&nbsp;</span>}</td>
              <td data-title="DOB">{dateOfBirth}</td>
              <td data-title="Nationality">{nationality}</td>
              <td data-title="Career" className="link">
                <Link href={`/driver/${driverId}`}>
                  <a>Career</a>
                </Link>
              </td>
              <td data-title="Bio" className="link"><a target='_blank' href={url}>Bio</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
