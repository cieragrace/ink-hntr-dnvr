function getArtistAPICalls(endpoint) {
  return fetch(`http://localhost:3000/api/v1/${endpoint}`)
  .then((res) => res.json())
}

export default getArtistAPICalls