import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import SeasonsTable from '../components/seasonsTable'


export async function getStaticProps() {
  const allData = getData('seasons')
  const seasonsData = JSON.parse(allData.fileContents).MRData.SeasonTable

  return {
    props: {
      seasonsData
    }
  }
}


export default function Seasons({ seasonsData }) {
  return (
    <Layout>

      <Meta title="Formula 1 - Seasons" />

      <main>
        <SeasonsTable data={seasonsData}></SeasonsTable>
      </main>

    </Layout>
  )
}
