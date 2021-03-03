import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import { dataForRace } from '../../../Lib/dataForTables'
import Table from '../../../components/Table'


export async function getServerSideProps(context) {

  const { season, round } = context.params
  const allData = await fetchData(`${season}/${round}/results.json`)
  const resultsData = allData.MRData.RaceTable.Races[0]

  return {
    props: { resultsData }
  }
}

export default function Driver({ resultsData }) {

  const caption = `Season ${resultsData.season} ${resultsData.raceName}`
  const headings = ['Position', 'Driver', 'Number', 'Nationality', 'Constructor', 'Points', 'Laps', 'Time', 'Status']
  const rows = dataForRace(resultsData, headings)

  return (
    <Layout>

      <Meta title="Formula 1 - {season}" />

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}


// export async function getServerSideProps(context) {
//   console.log('context = ', context.params)
//   const allData = getData('2020-16')
//   const resultsData = JSON.parse(allData.fileContents).MRData.RaceTable.Races[0]
//   return {
//     props: { resultsData }
//   }
// }


// export async function getStaticPaths() {
//   const paths = [{ params: { id: id.toString() } },]
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const allData = getData('test')
//   const driverData = JSON.parse(allData[4].fileContents).MRData.StandingsTable
//   const total = JSON.parse(allData[4].fileContents).MRData.total
//   return {
//     props: { driverData, total }
//   }
// }
