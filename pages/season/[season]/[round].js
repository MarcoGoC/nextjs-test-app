import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { getData } from '../../../Lib/fetchData'
import RaceResultsTable from '../../../components/raceResultsTable'


export async function getServerSideProps(context) {
  console.log('context = ', context.params)
  const allData = getData('2020-16')
  const resultsData = JSON.parse(allData.fileContents).MRData.RaceTable.Races[0]
  return {
    props: { resultsData }
  }
}

// export async function getServerSideProps({season, round}) {
//   const allData = await fetchData(`${season}/${round}/results`)
//   const total = allData.MRData.total
//   const resultsData = allData.MRData.StandingsTable

//   return {
//     props: { resultsData, total }
//   }
// }

export default function Driver({ resultsData }) {

  const season = `Season ${resultsData.season}`
  return (
    <Layout>

      <Meta title="Formula 1 - {season}" />

      <main>
        <RaceResultsTable data={resultsData}></RaceResultsTable>
      </main>

    </Layout>
  )
}


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
