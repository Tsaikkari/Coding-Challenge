import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import SingleRepo from './screens/SingleRepo'
import SingleGist from './screens/SingleGist'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repos/:repoName' element={<SingleRepo />} />
        <Route path='/gists/:gistId' element={<SingleGist />} />
      </Routes>
    </>
  )
}

export default App
