import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import { dataForSeasonDriverStandings } from '../../../Lib/dataForTables'
import Table from '../../../components/Table'


export async function getServerSideProps(context) {

  const { season } = context.params

  const { errorCode, data } = await fetchData(`${season}/driverStandings.json`)
  const standingsData = data.MRData.StandingsTable.StandingsLists

  return {
    props: { errorCode, standingsData }
  }
}


export default function Driver({ errorCode, standingsData }) {

  if (errorCode || standingsData.length === 0) {
    return (
      <Layout>
        <Error statusCode={errorCode} title="We could not found data for this topic" />
      </Layout>
    )
  }


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
