import fs from 'fs'
import path from 'path'
import Error from 'next/error';

// Get historical data from files

export function getData(fileId) {

  const dataDirectory = path.join(process.cwd(), 'data')
  const fileNames = fs.readdirSync(dataDirectory)

  console.log(fileNames)

  const fullPath = path.join(dataDirectory, `${fileId}.json`)
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

  const errorCode = res.ok ? false : res.statusCode
  const data = await res.json()

  return { data, errorCode }
}

