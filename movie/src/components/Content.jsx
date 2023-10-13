import React from 'react'
import Download from './content/download'
import Live from './content/Live'
import Subsciptions from './content/Subsciptions'
import Popular from './content/Popular'
import Trending from './content/Trending'

const Content = () => {
  return (
    <div>
      <Popular />
      <Download />
      <Trending />
      <Live />
      <Subsciptions />
    </div>
  )
}

export default Content