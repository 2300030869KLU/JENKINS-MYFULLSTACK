import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter } from 'react-router-dom'
import VisitorNavBar from './visitors/VisitorNavBar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <VisitorNavBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
