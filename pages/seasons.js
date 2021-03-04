import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import { dataForSeasons } from '../Lib/dataForTables'
import Table from '../components/Table'


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

  const caption = 'F1 Seasons Information'
  const headings = ['Season', 'Races', 'Driver Standings', 'Team Standings', 'Wikipedia']
  const rows = dataForSeasons(seasonsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - Seasons" />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}
