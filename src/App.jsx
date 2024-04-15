import './App.css'

// react router DOM
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

// pages
// import Home from './pages/home/home'

// layout
import RootLayout from './layout/RootLayout'
import Home from './pages/home/home';
import Headphones from './pages/headphones/Headphones';
import Speakers from './pages/speakers/Speakers';
import Earphones from './pages/earphones/Earphones';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='headphones' element={<Headphones/>}/>
        <Route path='speakers' element={<Speakers/>}/>
        <Route path='earphones' element={<Earphones/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
