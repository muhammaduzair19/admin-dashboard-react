import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Business from './Pages/Business/Business';
import Offer from './Pages/Offer/Offer';
import Botfunctionalities from './Pages/Botfunctionalities/Botfunctionalities';
import SingleUser from './Pages/SingleUser/SingleUser';
import SingleBusiness from './Pages/SingleBusiness/SingleBusiness';
import Users from './Pages/Users/Users';
import Dashboard from './Pages/Dashboard/Dashboard';



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Dashboard />} />
      <Route path='/users' element={<Users />} />
      <Route path='users/user/:id' element={<SingleUser />} />
      <Route path='/business' element={<Business />} />
      <Route path='/business/business/:id' element={<SingleBusiness />} />
      <Route path='/bot' element={<Botfunctionalities />} />
      <Route path='/offer' element={<Offer />} />
      {/* <Route path='/influencers' element={<Influencers />} /> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);
