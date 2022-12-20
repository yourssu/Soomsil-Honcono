import React from 'react'
import { useQuery } from 'react-query'

import { getReleases } from '../apis'

function Home() {
  const { status, data } = useQuery(`release-202212`, getReleases('202212'))

  console.log(data)
  
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {status === 'loading' && <li>Loading...</li>}
        {status === 'error' && <li>Error</li>}
        {status === 'success' && data.data?.map((release) => (
          <li key={release.no}>{release.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
