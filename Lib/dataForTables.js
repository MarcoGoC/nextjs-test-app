
// converts data for circuits table 
export function dataForCircuits(data, headings) {

  //headings = ['Name', 'Locality', 'Country', 'Map', 'Wikipedia']

  let rows = []

  data.Circuits.map(({ circuitId, circuitName, Location: { locality, country, lat, long }, url }) => (
    rows.push(Object.assign({},
      [{ id: circuitId, thFlag: true, text: circuitName, title: headings[0] },
      { text: locality, title: headings[1] },
      { text: country, title: headings[2] },
      { url: `https://www.google.com/maps/place/${lat},${long}`, type: 'url', atext: 'Map', title: headings[3] },
      { url: url, type: 'url', atext: 'Link', title: headings[4] }]
    ))
  ))

  return rows
}


// converts data for constructors table 
export function dataForConstructors(data, headings) {

  //headings = ['Name', 'Nationality', 'Wikipedia']

  let rows = data.Constructors.map(({ constructorId, name, nationality, url }) => [
    { title: headings[0], text: name, id: constructorId, thFlag: true },
    { title: headings[1], text: nationality },
    { title: headings[2], url: url, type: 'url', atext: 'Link' }
  ])

  return rows
}


// converts data for seasons table 
export function dataForSeasons(data, headings) {

  //headings = ['Season', 'Races', 'Wikipedia']

  let rows = data.Seasons.map(({ season, url }) => [
    { title: headings[0], text: season, id: season, thFlag: true },
    { title: headings[1], url: `/season/${season}`, type: 'link', atext: 'Season Races' },
    { title: headings[2], url: `/season/${season}/drivers`, type: 'link', atext: 'Driver Standings' },
    { title: headings[3], url: `/season/${season}/teams`, type: 'link', atext: 'Team Standings' },
    { title: headings[4], url: url, type: 'url', atext: 'Review' }
  ])


  return rows
}


// converts data for Season results table 
export function dataForSeason(data, headings) {

  //headings = ['Round', 'Names', 'Track', 'Date', 'Results', "Review" ]

  let rows = data.Races.map(({ season, round, raceName, date, url, Circuit: { circuitName } }) => [
    { title: headings[0], text: round, id: round, thFlag: true },
    { title: headings[1], text: raceName },
    { title: headings[2], text: circuitName },
    { title: headings[3], text: date },
    { title: headings[4], url: `/season/${season}/${round}`, type: 'link', atext: 'Race Results' },
    { title: headings[5], url: url, type: 'url', atext: 'Review' }
  ])

  return rows
}


// converts data for Race results table 
export function dataForRace(data, headings) {

  //headings = ['Position', 'Driver', 'Number', 'Nationality', 'Constructor', 'Points', 'Laps', 'Time', 'Status']

  let rows = data.Results.map(({ position, Driver: { driverId, givenName, familyName, nationality }, Constructor: { name }, number, points, laps, Time, status }) => [
    { title: headings[0], text: position, id: driverId, thFlag: true },
    { title: headings[1], text: `${givenName} ${familyName}` },
    { title: headings[2], text: number },
    { title: headings[3], text: nationality },
    { title: headings[4], text: name },
    { title: headings[5], text: points },
    { title: headings[6], text: laps },
    { title: headings[7], text: (Time) ? Time.time : <span>&nbsp;</span> },
    { title: headings[8], text: status },
  ])

  return rows
}


// converts data for Drivers table 
export function dataForDrivers(data, headings) {

  // headings = ['Name', 'Code', 'Number', 'DOB', 'Nationality', 'Career', 'Bio']

  const season = data.season
  let rows = data.Drivers.map(({ driverId, givenName, familyName, code, permanentNumber, dateOfBirth, nationality, url }) => [
    { title: headings[0], text: `${givenName} ${familyName}`, id: driverId, thFlag: true },
    { title: headings[1], text: (code) ? code : <span>&nbsp;</span> },
    { title: headings[2], text: (permanentNumber) ? permanentNumber : <span>&nbsp;</span> },
    { title: headings[3], text: dateOfBirth },
    { title: headings[4], text: nationality },
    { title: headings[5], url: `/driver/${driverId}`, type: 'link', atext: 'Career' },
    { title: headings[6], url: url, type: 'url', atext: 'Bio' },
  ])

  return rows
}


// converts data for Season Driver Standings 
export function dataForSeasonDriverStandings(data, headings) {

  // headings = ['Position', 'Code', 'Name', 'Points', 'Wins', 'Constructor']

  let rows = data[0].DriverStandings.map(({ position, points, wins, Driver: { driverId, givenName, familyName, code, permanentNumber, nationality }, Constructors }) => [
    { title: headings[0], text: position, id: position, thFlag: true },
    { title: headings[1], text: (code) ? code : <span>&nbsp;</span> },
    { title: headings[2], text: `${givenName} ${familyName}` },
    { title: headings[3], text: points },
    { title: headings[4], text: wins },
    { title: headings[5], text: nationality },
    { title: headings[6], text: (Constructors[0]) ? Constructors[0].name : <span>&nbsp;</span> },
  ])

  return rows
}


// converts data for Season Driver Standings 
export function dataForSeasonTeamStandings(data, headings) {

  // headings = ['Position', 'Points', 'Wins', 'Constructor', 'Nationality', 'Wiki']

  let rows = data[0].ConstructorStandings.map(({ position, points, wins, Constructor: { constructorId, name, nationality, url } }) => [
    { title: headings[0], text: position, id: position, thFlag: true },
    { title: headings[1], text: points },
    { title: headings[2], text: wins },
    { title: headings[3], text: name },
    { title: headings[4], text: nationality },
    { title: headings[6], url: url, type: 'url', atext: 'History' }
  ])

  return rows
}
