import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

 const View_Complaints= () => {
  const [Complaints, setComplaints] = useState([]);
  useEffect(() => {
    axios.get(
        getAllComplaints
    ).then((response)=>{
        setComplaints(response.data)
    })
  }, []);

  const changeComplaintStatus=(status)=>{
    console.log('status:', status);
  }
    
    

//   const loadUser = async () => {
//     const result = await axios.get();
//     setUsers(result.data);
//   };
//   const deleteUser = async id =>{
//     await axios.delete();
//     loadUser();
//   }
  return (
    <div className="container">
      <div className="py-4">
        <h1> Complaints </h1>
        <table class="table">
          <thead>
            <tr className="bg-danger; text-dark">
              <th scope="col"></th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              
              <th scope="col">Problem</th>
             
             
            </tr>
          </thead>
          <tbody>
            {Complaints && Complaints.map((Complaints,index)=>(
                    <tr key={}> 
                        <th scope="row">{index + 1}</th>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.specialization}</td>
                        <td>{user.email}</td>
                        <td>{user.contactno}</td>
                        <td>
                            {/* <Link className="btn btn-primary" onClick={()=>{Delete}} ><i class="fa-solid fa-trash-can"></i></Link> */}
                            <Link className="btn btn-outline-primary m-2" to={'/user/edit/${user.id}'}>Edit</Link>
                        </td>
                    </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Complaints;