
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
  const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'))
  const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'))
  
  return (
    <>
      <Suspense fallback={null}>
     <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/catalog' element={<CatalogPage/>} redirectTo='/catalog'/>
        <Route path='/camper' element={<CamperPage/>} redirectTo='/camper'/>
        <Route />
      </Routes>   
          </Suspense>
    </>
  )
}

export default App
