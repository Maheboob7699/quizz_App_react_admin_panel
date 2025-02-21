import { useState } from 'react'
import NavbarPage from './pages/Navbarpage'
import QuizzMenuPage from './pages/QuizzMenuPage'
import UserPage from './pages/UserPage'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import ShowQuestion from './containers/ShowQuestion'
function App() {

  return (
    <>
     <NavbarPage />
      <div style={{ display: 'flex' }}>
        <QuizzMenuPage />
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/user' element={<UserPage />} />
          <Route path='/quizz' element={<QuestionPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
