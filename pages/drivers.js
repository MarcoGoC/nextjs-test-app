import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import { dataForDrivers } from '../Lib/dataForTables'
import Table from '../components/Table'


export async function getStaticProps() {
  const allData = getData('drivers')
  const driversData = JSON.parse(allData.fileContents).MRData.DriverTable
  //console.log(driversData.Drivers)

  return {
    props: {
      driversData
    }
  }
}

export default function Drivers({ driversData }) {

  const caption = 'F1 Drivers Information'
  const headings = ['Name', 'Code', 'Number', 'DOB', 'Nationality', 'Career', 'Bio']
  const rows = dataForDrivers(driversData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - Drivers" />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}
