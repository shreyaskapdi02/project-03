import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/homepage/home.jsx'
import About from './components/about/About.jsx'
import Eabcd from './components/cont/Eabcd.jsx'
import Login from './components/Login/Login.jsx'




// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {path: "about", element: <About />},
//       {path: "Cont", element: <Eabcd />}
//       // Add more routes as needed
//     ],
//   },
//   // Add more routes as needed
// ])

const Router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
         
         <Route path='' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='Cont' element={<Eabcd/>}/>
         <Route path='Login' element={<Login/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
