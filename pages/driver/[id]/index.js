import Meta from '../../../components/template/meta'
import Layout from '../../../components/layout'
import { fetchData } from '../../../Lib/fetchData'
import DriverTable from '../../../components/driverTable'


export async function getServerSideProps(context) {

  const { id } = context.params

  const { errorCode, data } = await fetchData(`drivers/${id}/driverStandings.json`)

  const total = data.MRData.total
  const driverData = data.MRData.StandingsTable

  return {
    props: { errorCode, driverData, total }
  }
}

export default function Driver({ errorCode, driverData, total }) {

  if (errorCode || driverData.length === 0) {
    return (
      <Layout>
        <Error statusCode={errorCode} title="We could not found data for this topic" />
      </Layout>
    )
  }


  const { givenName, familyName } = driverData.StandingsLists[0].DriverStandings[0].Driver

  return (
    <Layout>

      <Meta title="Formula 1 - Driver Information" />

      <h2 className="pageTitle">{givenName} {familyName}</h2>

      <main>
        <DriverTable data={driverData} total={total}></DriverTable>
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
