// https://api.spacexdata.com/v3/launches
const API_URL = 'https://api.spacexdata.com/v3'

export async function getLaunches() {
 try {
   const response = await fetch(`${API_URL}/launches`)
   const data = await response.json()
   return data;
 } catch (error) {
  console.error('error', error)
 }
}  

export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('error', error)
  }
}