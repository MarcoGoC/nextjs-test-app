import fs from 'fs'
import path from 'path'


// Get historical data from files

export function getData(fileId) {

  const dataDirectory = path.join(process.cwd(), 'data')
  const fileNames = fs.readdirSync(dataDirectory)

  console.log(fileNames)

  const fullPath = path.join(dataDirectory, `${fileId}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return {
    fileId,
    fileContents
  }
}


// Fetch data from api

export async function fetchData(url) {

  console.log('url = ', `http://ergast.com/api/f1/${url}`)

  const res = await fetch(`http://ergast.com/api/f1/${url}`)
  const data = await res.json()

  return data
}


// Old version of the getData

export function OLD_getData(fileId) {

  const fileNames = fs.readdirSync(dataDirectory)

  path.join(postsDirectory, `${id}.json`)

  console.log(fileNames)

  const allData = fileNames.map(fileName => {
    const id = fileName.replace(/\.json$/, '')

    if (fileId == id) {
      const fullPath = path.join(dataDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return {
        id,
        fileContents
      }
    } else {
      return {
        id
      }
    }
  })

  return allData
}
