import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import BlogPage from './components/pages/BlogPage'
import NotFoundPage from './components/pages/NotFoundPage'


const App: React.FC = () => {


  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
