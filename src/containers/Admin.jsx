import { Routes, Route } from 'react-router-dom';
import NavbarPage from '../pages/NavbarPage';
import QuizzMenuPage from '../pages/QuizzMenuPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import QuestionPage from '../pages/QuestionPage';

function Admin() {
  return (
    <>
      <NavbarPage />
      <div style={{ display: 'flex' }}>
        <QuizzMenuPage />
        <Routes>
          {/* Remove "/admin" from paths */}
          <Route path="home" element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="quizz" element={<QuestionPage />} />
        </Routes>
      </div>
    </>
  );
}

export default Admin;
