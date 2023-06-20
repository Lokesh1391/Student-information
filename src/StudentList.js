import React, { useEffect, useState } from "react";
import './Table.css';
import { Link, useNavigate } from "react-router-dom";
import { MapHTMLAttributes } from "react";



function StudentList(){

const[data,setData]=useState("")

const navigate =useNavigate();




useEffect(()=>{
fetch("https://json-rest-api-b3fm.onrender.com")
.then(res=>res.json())
.then(resp=>setData(resp))
.catch(err=>err)
},[])

const deleteData=(id)=>{
    if(window.confirm("Are You Sure ?")){
    fetch("http://localhost:3006/StudenInfo/"+id,{
        method:"DELETE"
    })
    .then(()=>{
       alert("Deleted Successfully")
        window.location.reload()
    })

    .catch((err)=>{
        alert("error"+err)
        
    })
}
}

const EditStudentIfo=(id)=>{
navigate('/editInfo/'+id)
}


const ViewDetails=(id)=>{
    navigate('/viewdetails/'+id)
    }

    // const cons=(e)=>{
    //     // e.preventDefault()

      
    //         fetch("http://localhost:3006/StudenInfo"+id)
    //         .then(res=>res.json())
    //         .then(
    //             resp=>{
    //                 setData(resp)

    //         console.log(data)}
    //         )
    //         .catch(err=>err)
    //         }
    

return(
    <div className="container">
        <div className="Lcard">
           
        <h1 className="h1">Student Info</h1>
       <div className="b">
        <Link to={"/form"} ><button className="btn">Add New</button></Link>
        <Link to={'/login'}><button className="btn">Log-Out</button></Link>
        </div>
        <table>
            <thead>
                <tr>

                    <th>
                        Id</th>
                    <th>Roll-No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Dept</th>
                    <th>Action</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
            {/* <input type="checkbox" onClick={(e)=>cons(id)} /> */}
            {data && data.map((item)=>(
                <tr>
                   
                    <td>
                        
                        {item.id}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.dept}</td>
                    <td>
                        <span className="act">
                        <button className="del" onClick={()=>{deleteData(item.id)}}>Delete</button> 
                        <button className="edi" onClick={()=>{EditStudentIfo(item.id)}}>Edit</button>
                        </span>
                        </td>
  
                    <td><button className="view" onClick={()=>{ViewDetails(item.id)}}>View Detail</button></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
)
}
export default StudentList;
