import react from "react";

import {useState} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";


const AddUser=()=>{

    const navigate =useNavigate();

    
 const [firstName,setFirstName] =useState("kiran");
 const [lastName ,setLastName] =useState("kadam");
 const [email,setEmail] =useState("kirankadam6965@gmail.com");
 const [mobNumber ,setMobNumber] =useState("9865985689");
 const [course  ,setCourse] =useState("MERN");


    const submitFormHandeler=(e)=>{
        e.preventDefault();

              
const data = {
              firstName,
              lastName,
              email,
              mobNumber,
              course,


}

   axios.post("http://localhost:5000/users",data)
   .then(res=>{
       alert("user Added Successfully..!")
    //    window.location.href="/";
       navigate("/")
   })





// console.log(data);
    
//  console.log(firstName,lastName,email,mobNumber,course)
        
    }

    return(
        <div className="m-5">
            <h2 className="text-center m-5">ADD NEW USER  </h2>
 <form onSubmit={submitFormHandeler} >
     <div>
         <label> First Name </label><br />
         <input type="text" className="from-control"placeholder="Enter First Name "required
         onChange={(e)=>{setFirstName(e.target.value)}} />
     </div>
     <br />
     <div>
     <label> Last Name  </label><br />
         <input type="text" className="from-control"placeholder="Enter Last  Name " required
          onChange={(e)=>{setLastName(e.target.value)}}/>
     </div>
     <br />
     <div>
     <label> Email </label><br />
         <input type="email" className="from-control"placeholder="Enter Email " required
          onChange={(e)=>{setEmail(e.target.value)}}/>
     </div>
     <br />
     <div>
     <label> contact number  </label><br />
         <input type="number" className="from-control"placeholder="Enter Mobile Number "required
          onChange={(e)=>{setMobNumber(e.target.value)}} />
     </div><br />
    
     <div>
     <label> Course Name  </label><br />
         <input type="text" className="from-control"placeholder="Enter course Name "required
          onChange={(e)=>{setCourse(e.target.value)}} />
     </div><br />
     <input className="btn btn-success" type="submit" value="Add User" />

 </form>
        </div>
    )
}

export default AddUser;