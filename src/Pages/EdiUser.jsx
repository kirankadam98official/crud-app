import react,{useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams} from "react-router-dom";



const EditUser =()=>{

const navigate =useNavigate();

const {userId} =useParams();

// console.log(userId);
 


 const [firstName,setFirstName] =useState("");
 const [lastName ,setLastName] =useState("");
 const [email,setEmail] =useState("");
 const [mobNumber ,setMobNumber] =useState("");
 const [course  ,setCourse] =useState("");




 useEffect( ()=>{

 

    axios.get(`http://localhost:5000/users/${userId}`)
    .then(res=>{
       console.log(res.data[0].firstName);
       setFirstName(res.data[0].firstName);
       setLastName(res.data[0].lastName);
       setEmail(res.data[0].email);
       setMobNumber(res.data[0].mobNumber);
       setCourse(res.data[0].course);
    })
    .catch(err=>alert(err))


},[]);
 
 const updateFormHandler=(e)=>{
    e.preventDefault();

    const data = {
        firstName,
        lastName,
        email,
        mobNumber,
        course,


}
              
    
// console.log(data)

axios.put(`http://localhost:5000/users/${userId}`,data)

.then(res=>{ 

    alert("user updated successfully.!")
    navigate("/");


} 
)
.catch(err=>alert(err));






    //  alert('updateFormHandler');



  
}

    
return(
    <div className="m-5">
            <h2 className="text-center m-5">EDIT USER INFO  </h2>
 <form onSubmit={updateFormHandler} >
     <div>
         <label> First Name </label><br />
         <input type="text" className="from-control"placeholder="Enter First Name "required value={firstName}
         onChange={(e)=>{setFirstName(e.target.value)}} />
     </div>
     <br />
     <div>
     <label> Last Name  </label><br />
         <input type="text" className="from-control"placeholder="Enter Last  Name " required value={lastName}
          onChange={(e)=>{setLastName(e.target.value)}}/>
     </div>
     <br />
     <div>
     <label> Email </label><br />
         <input type="email" className="from-control"placeholder="Enter Email " required value={email}
          onChange={(e)=>{setEmail(e.target.value)}}/>
     </div>
     <br />
     <div>
     <label> contact number  </label><br />
         <input type="number" className="from-control"placeholder="Enter Mobile Number "required value={mobNumber}
          onChange={(e)=>{setMobNumber(e.target.value)}} />
     </div><br />
    
     <div>
     <label> Course Name  </label><br />
         <input type="text" className="from-control"placeholder="Enter course Name "required value={course}
          onChange={(e)=>{setCourse(e.target.value)}} />
     </div><br />
     <input className="btn btn-success" type="submit" value="Save Changes" />

 </form>
        </div>
)

}

export default EditUser;
