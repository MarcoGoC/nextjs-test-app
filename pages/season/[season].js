import Meta from '../../components/template/meta'
import Layout from '../../components/layout'
import { fetchData } from '../../Lib/fetchData'
import { dataForSeason } from '../../Lib/dataForTables'
import Table from '../../components/Table'


export async function getServerSideProps(context) {

  const { season } = context.params

  const { errorCode, data } = await fetchData(`${season}.json`)

  const total = data.MRData.total
  const racesData = data.MRData.RaceTable

  return {
    props: { errorCode, racesData, total }
  }
}

export default function Driver({ errorCode, racesData, total }) {

  if (errorCode || racesData.length === 0) {
    return (
      <Layout>
        <Error statusCode={errorCode} title="We could not found data for this topic" />
      </Layout>
    )
  }


  const season = `Season ${racesData.season}`

  const caption = `${total} Races`
  const headings = ['Round', 'Names', 'Track', 'Date', 'Results', "Review"]
  const rows = dataForSeason(racesData, headings)

  return (
    <Layout>

      <Meta title={`Formula 1 - ${season}`} />

      <h2 className="pageTitle">{season}</h2>

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

    </Layout>
  )
}

// export async function getServerSideProps(context) {
//   console.log(' params = ', context.params)
//   const allData = getData('season')
//   const racesData = JSON.parse(allData.fileContents).MRData.RaceTable
//   const total = JSON.parse(allData.fileContents).MRData.total
//   return {
//     props: { racesData, total }
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
