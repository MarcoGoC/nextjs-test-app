import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
// import { fetchData } from '../../../Lib/fetchData'
// import { dataForSeasonStandings } from '../../../Lib/dataForTables'
// import Table from '../../../components/Table'


// export async function getServerSideProps(context) {

//   const { season, round } = context.params
//   const allData = await fetchData(`${season}/results.json`)
//   const resultsData = allData.MRData.RaceTable.Races[0]

//   return {
//     props: { resultsData }
//   }
// }

export default function Driver({ resultsData }) {

  // const caption = `Season ${resultsData.season} Standings`
  // const headings = ['Position', 'Driver', 'Number', 'Nationality', 'Constructor', 'Points', 'Laps', 'Time', 'Status']
  // const rows = dataForRace(resultsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - {season} - Standings" />

      <main>
        <h1>Season Results ...in progress</h1>
        {/* <Table caption={caption} headings={headings} rows={rows} /> */}
      </main>

    </Layout>
  )
}