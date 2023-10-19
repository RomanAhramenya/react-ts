import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import BlogPage from './components/pages/BlogPage'
import NotFoundPage from './components/pages/NotFoundPage'
import Layout from './components/layout/Layout'
import Posts from './components/pages/Posts'
import EditPostPage from './components/pages/EditPostPage'
import RequireAuth from './components/hoc/RequireAuth'
import LoginPage from './components/pages/auth/LoginPage'


const App: React.FC = () => {


  return (
    <>

      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='blog' element={
              <RequireAuth>
                <BlogPage />
              </RequireAuth>} />
            <Route path='blog/:id' element={<Posts />} />
            <Route path='blog/:id/edit' element={<EditPostPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </div>
    </>

  )
}

export default App
