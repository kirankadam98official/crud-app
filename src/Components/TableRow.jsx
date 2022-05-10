import react from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableRow =({user})=>{


  const DeleteUserHandler =()=>{

axios.delete("http://localhost:5000/users/"+ user._id)

.then(res=>{

    // alert("delete function..!")

    alert("user Deleted Successfully..!")
    window.location.reload()
})
.catch(err=>{
    alert (err)
})
   

}


    return(
        <tr >
        <td>  {user.firstName}</td>
        <td> {user.lastName}</td>
        <td> {user.email}</td>
        <td> {user.mobNumber}</td>
       <td> {user.course}</td>

         {/* <td><button onClick={changeDetails}>change me </button></td>  */}
        <td>
        <Link to={`/edituser/${user._id}`} className="bg-primary btn "> Edit</Link>
        </td>
        <td>
        <button className="bg-danger btn " onClick={DeleteUserHandler}> Delete</button>
        </td>
     </tr>
    )
}


export default TableRow;