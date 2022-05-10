import React from "react"

import AddUser from "./Pages/AddUser"

import Home from "./Pages/Home"

import EditUser from "./Pages/EdiUser"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"

function App (){
  return(
  <>
  <BrowserRouter>

             <Navbar/>
                 <Routes>

                   <Route path="/" element={ <Home/>}/>

                   <Route path="/adduser" element={ <AddUser/>} />

                   <Route path="/edituser/:userId" element={ <EditUser/>}/>

                   <Route path="*" element={ <h2 style={{color:"red",textAlign:"center"}}> 404 : page is not found ...Go to home page </h2>}/>

             </Routes>
 
  
  </BrowserRouter>
  

  </>
       

       
    )

}


export default App