import Head from 'next/head'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import DriverTable from '../../../components/driverTable'


export async function getServerSideProps(context) {
  const allData = await fetchData(context.params.id)
  const total = allData.MRData.total
  const driverData = allData.MRData.StandingsTable

  return {
    props: { driverData, total }
  }
}

export default function Driver({ driverData, total }) {

  const name = `${driverData.StandingsLists[0].DriverStandings[0].Driver.givenName}  ${driverData.StandingsLists[0].DriverStandings[0].Driver.familyName}`
  return (
    <Layout>

      <Head>
        <title>Formula 1 - Driver Information</title>
      </Head>

      <h2 className="driver">{name}</h2>

      <main>
        <DriverTable data={driverData} total={total}></DriverTable>
      </main>

      <style jsx>{`
        .driver {
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
