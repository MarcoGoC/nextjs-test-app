import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import { dataForSeasonTeamStandings } from '../../../Lib/dataForTables'
import Table from '../../../components/Table'
import Error from 'next/error'


export async function getServerSideProps(context) {

  const { season } = context.params

  const { errorCode, data } = await fetchData(`${season}/constructorStandings.json`)

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

  const caption = `${season} - Constructor standings`
  const headings = ['Position', 'Points', 'Wins', 'Constructor', 'Nationality', 'Wiki']
  const rows = dataForSeasonTeamStandings(standingsData, headings)

  return (
    <Layout>

      <Meta title={`Formula 1 - ${season} - Constructors Standings`} />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}

