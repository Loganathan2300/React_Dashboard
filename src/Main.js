import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import App from './App';
import Calculator from './component/calculator';
import Body from './component/layout/Body';
import Dashboard from './component/layout/Dashboard';

export default function Main() {
  return (
    <>
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<App/>}>
         <Route path='/Calculator' element={<Calculator/>} />
         <Route path='/Forms' element={<Body/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

