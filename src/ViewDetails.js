

 
 import React from "react";
 import { useState } from "react";
 import { useEffect } from "react";

 import './ViewDetail.css'
import { Link, useParams } from "react-router-dom";


 function ViewDetails(){

    const[data,setData]=useState("")

const {studentid}=useParams()


useEffect(()=>{
fetch("http://localhost:3006/StudenInfo/"+studentid)
.then(res=>res.json())
.then(resp=>setData(resp))
.catch(err=>err)
},[])


    return(
        <div id="body">
            
            <div className="card">
            {data && 
            <div>
                <h3>Student-Id           : &nbsp;&nbsp;{data.id}</h3>
                <h3>Student Roll-No      : &nbsp;&nbsp;{data.rollNo}</h3>
                <h3>Student Name         : &nbsp;&nbsp;{data.name}</h3>
                <h3>Student City         : &nbsp;&nbsp;{data.city}</h3>
                <h3>Student Dept         : &nbsp;&nbsp;{data.dept}</h3>

               <Link to={'/studentlist'}> <button className="bn">Back</button></Link>
                    
               
            </div>
           
 }
            </div>



        </div>
    )
 }
 export default ViewDetails;