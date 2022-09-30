

import React from 'react'
import { Route , Routes} from "react-router-dom";
 import Register from './Register';
import Login from './Login';
import Newsg from './News';
import Navbarg from './Navbar';

export default function Allroutes() {
  return (
    <div>
      <Routes>
           {/* <Route path='/' element={<Navbarg/>}> </Route>  */}
           {/* <Route path='/' element={< Register/>}> </Route>  */}
           <Route path='/Login' element={<Login/>}> </Route> 
           <Route path='/Register' element={<Register/>}></Route>
        </Routes>
          
    </div>
  )
}
