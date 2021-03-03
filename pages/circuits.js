import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import { dataForCircuits } from '../Lib/dataForTables'
import Table from '../components/Table'


export async function getStaticProps() {
  const allData = getData('circuits')
  const circuitsData = JSON.parse(allData.fileContents).MRData.CircuitTable

  return {
    props: {
      circuitsData
    }
  }
}

export default function Circuits({ circuitsData }) {

  const caption = "F1 Circuits Information"
  const headings = ['Name', 'Locality', 'Country', 'Map', 'Wikipedia']
  const rows = dataForCircuits(circuitsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - Circuits" />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}
