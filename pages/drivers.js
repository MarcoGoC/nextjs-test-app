import Head from 'next/head'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import DriversTable from '../components/driversTable'


export async function getStaticProps() {
  const allData = getData('drivers')
  const driversData = JSON.parse(allData.fileContents).MRData.DriverTable
  //console.log(driversData.Drivers)

  return {
    props: {
      driversData
    }
  }
}

export default function Drivers({ driversData }) {
  return (
    <Layout>

      <Head>
        <title>Formula 1 - Drivers</title>
      </Head>

      <main>
        <DriversTable data={driversData}></DriversTable>
      </main>

    </Layout>
  )
}
