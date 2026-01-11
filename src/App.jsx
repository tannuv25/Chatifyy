import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App() {
  return (
    <>
    <div className="bg-[url('/src/assets/bgImage.svg')] bg-no-repeat bg-cover min-h-screen">
   <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
   </Router>
   </div>
    </>
  )
}

export default App
