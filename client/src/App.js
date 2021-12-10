import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './components/layout/layout'
import { Messages } from './pages/messages/all'
import { Single } from './pages/messages/single'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Messages type="unread" /> } />
          <Route path="/messages" element={ <Messages type="total" /> } />
          <Route path="/messages/:id" element={ <Single /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
