import axios from 'axios'

function createFetch() {
  return (url: string) => fetch(url)
}

interface ReleasesDTO {
  data: Song[]
  limit: number
  offset: number
  page: number
  totle: {
    page: number
    row: number
  }
}

export function getReleases(date: string) {
  return async function() {
    const { data } = await axios.get<ReleasesDTO>(`https://api.manana.kr/v2/karaoke/release.json?release=${date}&brand=tj`)
    return data
  }
}
