import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import CircuitsTable from '../components/circuitsTable'


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
  return (
    <Layout>

      <Meta title="Formula 1 - Circuits" />

      <main>
        <CircuitsTable data={circuitsData}></CircuitsTable>
      </main>

    </Layout>
  )
}
