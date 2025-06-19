import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import MoviesDetail from './Pages/MoviesDetail'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path ='/movies/:id' element={<MoviesDetail/>}/>
    </Routes>
  )
}

export default App
