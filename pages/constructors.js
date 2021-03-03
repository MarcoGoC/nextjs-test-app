import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import { dataForConstructors } from '../Lib/dataForTables'
import Table from '../components/Table'


export async function getStaticProps() {
  const allData = getData('teams')
  const constructorsData = JSON.parse(allData.fileContents).MRData.ConstructorTable
  //console.log(contructorsData.Drivers)

  return {
    props: {
      constructorsData
    }
  }
}

export default function Constructors({ constructorsData }) {

  const caption = 'F1 Constructors/Teams Information'
  const headings = ['Name', 'Nationality', 'Wikipedia']
  const rows = dataForConstructors(constructorsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - Teams" />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}
