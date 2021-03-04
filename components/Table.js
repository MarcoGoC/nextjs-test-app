import PropTypes from 'prop-types'
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

//
// Rows types 
//    Row Title = first cell of the row must have a thFlag = true and id 
//    type = Link => uses router Link for internal navigation
//    type = url => link to a an extrenal site 
//    if no type => is a regular cell data 
// see examples below
//
//  caption: 'F1 Stats - Test App',
//  headings: ['Col-Title1', 'Col-Title2'],
//  rows: [{ title: 'data-title1', text: 'row title', id: 'Id-1', thFlag: true },
//        { title: 'data-title2', url: '/', type: 'link', atext: 'link-text' },
//        { title: 'data-title3', url: '/', type: 'url', atext: 'a-text' },
//        { title: 'data-title4', text: 'cell-text' }]
//

Table.PropTypes = {

  // Caption text for the table 
  caption: PropTypes.string,

  // Columns titles for each cell in the same order as the rows
  headings: PropTypes.array,

  //page description 
  rows: PropTypes.array
}
