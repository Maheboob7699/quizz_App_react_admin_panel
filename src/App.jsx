import { useState } from 'react'
import NavbarPage from './pages/Navbarpage'
import QuizzMenuPage from './pages/QuizzMenuPage'
import UserPage from './pages/UserPage'
import { Routes, Route} from 'react-router-dom'
import SpecificQuestions from './containers/SpecificQuestions'
function App() {

  return (
    <>
     <NavbarPage />
      <div style={{ display: 'flex' }}>
        <QuizzMenuPage />
        <Routes>
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </div>
      <SpecificQuestions/>
    </>
  )
}

export default App
