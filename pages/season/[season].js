import Meta from '../../components/template/meta'
import Layout from '../../components/layout'
import { fetchData } from '../../Lib/fetchData'
import { dataForSeason } from '../../Lib/dataForTables'
import Table from '../../components/Table'


export async function getServerSideProps(context) {
  const { season } = context.params
  const allData = await fetchData(`${season}.json`)
  const total = allData.MRData.total
  const racesData = allData.MRData.RaceTable

  return {
    props: { racesData, total }
  }
}

export default function Driver({ racesData, total }) {

  const season = `Season ${racesData.season}`

  const caption = `${total} Races`
  const headings = ['Round', 'Names', 'Track', 'Date', 'Results', "Review"]
  const rows = dataForSeason(racesData, headings)

  return (
    <Layout>

      <Meta title={`Formula 1 - ${season}`} />

      <h2 className="title">{season}</h2>

      <main>
        <Table caption={caption} headings={headings} rows={rows} />
      </main>

      <style jsx>{`
        .title {
          margin-top: 0.5em;
          font-size: 2.5em;
          text-align: center;
          color: #8b0303bf;
        }
      `}</style>

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
