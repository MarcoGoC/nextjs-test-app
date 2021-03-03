import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
// import { gethData } from '../../../Lib/fetchData'
// import { fetchData } from '../../../Lib/fetchData'
import { dataForSeasonTeamStandings } from '../../../Lib/dataForTables'
// import Table from '../../../components/Table'



// export async function getServerSideProps(context) {
//   console.log('context = ', context.params)
//   const allData = getData('2020TeamsResults')
//   const resultsData = JSON.parse(allData.fileContents).MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
//   return {
//     props: { resultsData }
//   }
// }

// export async function getServerSideProps(context) {

//   const { season, round } = context.params
//   const allData = await fetchData(`${season}/results.json`)
//   const resultsData = allData.MRData.RaceTable.Races[0]

//   return {
//     props: { resultsData }
//   }
// }

export default function Driver({ resultsData }) {

  const caption = `Season ${resultsData.season} Constructors Standings`
  const headings = ['Position', 'Points', 'Wins', 'Constructor', 'Constructor', 'Nationality', 'Wiki']
  const rows = dataForRace(resultsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - {season} - Constructor Standings" />

      <main>
        <h1>Season Results ...in progress</h1>
        {/* <Table caption={caption} headings={headings} rows={rows} /> */}
      </main>

    </Layout>
  )
}