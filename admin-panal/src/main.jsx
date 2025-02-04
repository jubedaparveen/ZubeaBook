import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ContextApi from './Context/ContextApi.jsx'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home.jsx'
import ProfileDetails from './Pages/ProfileDetails.jsx'
import Notification from './Pages/Notification.jsx'
import Signin from './Pages/signin.jsx'
import Signup from './Pages/signup.jsx'

const route = createBrowserRouter(createRoutesFromElements([
  <Route path='/' element={ <App /> } />,
  
  <Route path='/ZubeaBook' element={<Layout/>}>,

   <Route path='' element={<Home/>}/>,
   <Route path='/ZubeaBook/profiledetails' element={<ProfileDetails/>}/>
   <Route path='/ZubeaBook/notification' element={<Notification/>}/>
   <Route path='/ZubeaBook/signin' element={<Signin/>}/>
   <Route path='/ZubeaBook/signup' element={<Signup/>}/>
  
  </Route>
]));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={route} />
    </ContextApi>
  </StrictMode>,
)
