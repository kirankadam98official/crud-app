
import react,{useEffect, useState} from "react"
import axios from "axios";
import TableRow from "../Components/TableRow";
import { Link } from "react-router-dom";


const Home = ()=>{


//  const [firstName ,setFisrtName] =useState("kiran");
//  const [lastName ,setLastName] =useState("kadam");
//  const [Email,setEmail] =useState("kirankadam6965@gmail.com");
//  const [MobNumber ,setMobNumber] =useState("9865985689");
//  const [course  ,setCourse] =useState("MERN");

 // to store data from upi 

const [userData,setUserData]=useState([]);
console.log(userData);

 useEffect(()=>{
   //  fetch("http://localhost:5000/users")
   //  .then(res=> res.json())
   //  .then(data=>{
   //     console.log(data);
   //  })
   //  .catch(err =>alert (err))


   axios.get("http://localhost:5000/users")
   .then(res=>{
      // console.log(res.data)
      setUserData(res.data);
   })
   .catch(err=>alert(err))
   
 },[]);


//  // Use Effect ----

//  console.log("Home page  is running")
// // first condition 
// useEffect(()=>{
//   console.log("useeffect 1");
// });
// // second condition 

// useEffect(()=>{
//   console.log("useeffect 2");
// },[]);

// // third condition 

// useEffect(()=>{
//   console.log("useeffect 3");
// },[firstName]);

// // let fname = "kiran ";
// // let lname ="kadam ";
// // let email = "kirankadam6965@gmail.com ";
// // let mobNumber =9865985689;


// const changeDetails=()=>{
//   // alert("inside function ,Hello " +firstName)

//   setFisrtName("rohan");
//   setLastName("darekar");
//   setEmail("rohandarekar@gmail.com");
//   setMobNumber("9865451464");
 

//     // let fname = "rohan ";
// //     let lname ="darekar";
// //     let email = "rohandarekar@gmail.com ";
// //     let mobNumber =9865451464;
//  }

    return(

<div className="container">
        <h2 className="text-center bg-warning" > React,Node,express js & mongoDb Crud App </h2>
          <Link to="/adduser" className="btn btn-success float-right mb-3">Add User</Link>
          <table className="table">
            <thead className="bg-secondary">
          <tr>
             <td> First Name </td>
             <td> Last Name</td>
             <td> Email</td>
             <td> Mobile Number</td>
             <td> course</td>
             <td> Edit </td>
             <td>Delete </td>
          </tr>
            </thead>
        <tbody>
           {
              userData.map((user )=>{
                 return(
                 <TableRow key={user._id} user={user}/>
                 )
              })
           }
       
      
        </tbody>
       
    
          </table>
        </div>
    )
}

export default Home