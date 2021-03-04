import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import { dataForSeasonDriverStandings } from '../../../Lib/dataForTables'
import Table from '../../../components/Table'


export async function getServerSideProps(context) {

  const { season } = context.params

  const allData = await fetchData(`${season}/driverStandings.json`)
  const standingsData = allData.MRData.StandingsTable.StandingsLists

  return {
    props: { standingsData }
  }
}


export default function Driver({ standingsData }) {

  const season = `Season ${standingsData[0].season}`

  const caption = `${season} - Driver standings`
  const headings = ['Position', 'Code', 'Name', 'Points', 'Wins', 'Nationality', 'Constructor']
  const rows = dataForSeasonDriverStandings(standingsData, headings)

  return (
    <Layout>

      <Meta title={`Formula 1 - ${season} - Constructors Standings`} />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}
