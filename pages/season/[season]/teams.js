import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
// import { getData } from '../../../Lib/fetchData'
import { dataForSeasonTeamStandings } from '../../../Lib/dataForTables'
import Table from '../../../components/Table'


export async function getServerSideProps(context) {

  const { season } = context.params

  const allData = await fetchData(`${season}/constructorStandings.json`)
  const standingsData = allData.MRData.StandingsTable.StandingsLists

  return {
    props: { standingsData }
  }
}

// export async function getServerSideProps(context) {

//   console.log(' params = ', context.params)
//   const allData = getData('2020TeamsResults')
//   const standingsData = JSON.parse(allData.fileContents).MRData.StandingsTable.StandingsLists

//   return {
//     props: { standingsData }
//   }
// }

export default function Driver({ standingsData }) {

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

