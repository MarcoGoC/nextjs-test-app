

import Head from 'next/head'
import Layout from '../../components/layout'
import { getData } from '../../Lib/fetchData'
import SeasonTable from '../../components/seasonTable'


export async function getServerSideProps(context) {
  console.log(' params = ', context.params)
  const allData = getData('season')
  const racesData = JSON.parse(allData.fileContents).MRData.RaceTable
  const total = JSON.parse(allData.fileContents).MRData.total
  return {
    props: { racesData, total }
  }
}

// export async function getServerSideProps(context) {
//   const allData = await fetchData(context.params.id)
//   const total = allData.MRData.total
//   const racesData = allData.MRData.StandingsTable

//   return {
//     props: { racesData, total }
//   }
// }

export default function Driver({ racesData, total }) {

  const season = `Season ${racesData.season}`
  return (
    <Layout>

      <Head>
        <title>Formula 1 - {season}</title>
      </Head>

      <h2 className="title">{season}</h2>

      <main>
        <SeasonTable data={racesData} total={total}></SeasonTable>
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
