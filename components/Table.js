import styles from './table.module.scss'
import Link from 'next/link'


export default function Table({ caption, headings, rows }) {

  // console.log(rows[0])

  return (
    <div>
      <table className={styles.responsiveTable}>
        <caption>{caption}</caption>
        <thead >
          <tr>
            {headings.map((title) => (
              <th scope="col" key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`tr-${row[0].id}`}>
              {Object.values(row).map(({ id, thFlag, title, type, text, url, atext }) => (
                (thFlag) ?
                  <th scope="row" key={`th-${id}`}>{text}</th>
                  : (type === 'url') ?
                    <td data-title={title} key={`td-${title}`}><a target='_blank' href={url}>{atext}</a></td>
                    : (type === 'link') ?
                      <td data-title={title} key={`td-${title}`}><Link href={url}><a>{atext}</a></Link></td>
                      :
                      <td data-title={title} key={`td-${title}`} >{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}
