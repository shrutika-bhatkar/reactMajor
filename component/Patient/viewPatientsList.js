import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

 const View_Patient = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get();
    setUsers(result.data);
  };
//   const deleteUser = async id =>{
//     await axios.delete();
//     loadUser();
//   }
  return (
    <div className="container">
      <div className="py-4">
        <h1> Patients List</h1>
        <table class="table">
          <thead>
            <tr className="bg-success text-white">
              <th scope="col">Patient_Id</th>
              <th scope="col">PatientFirstName</th>
              <th scope="col">PatientLastName</th>
              <th scope="col">Email</th>
              
              <th scope="col">Contact No</th>
              <th scope="col">Gender</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>(
                    <tr>
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
export default View_Patient;