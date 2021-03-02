import Meta from '../components/template/meta'
import Layout from '../components/layout'
import { getData } from '../Lib/fetchData'
import TeamsTable from '../components/teamsTable'


export async function getStaticProps() {
  const allData = getData('teams')
  const contructorsData = JSON.parse(allData.fileContents).MRData.ConstructorTable
  //console.log(contructorsData.Drivers)

  return {
    props: {
      contructorsData
    }
  }
}

export default function Constructors({ contructorsData }) {
  return (
    <Layout>

      <Meta title="Formula 1 - Teams" />

      <main>
        <TeamsTable data={contructorsData}></TeamsTable>
      </main>

    </Layout>
  )
}
