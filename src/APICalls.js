function getArtistAPICalls(endpoint) {
  return fetch(`https://ink-hntr-api-gzjw.vercel.app/api/v1/${endpoint}`)
  .then((res) => res.json())
}

export default getArtistAPICalls