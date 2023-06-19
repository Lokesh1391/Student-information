import React from "react";
import { useState, useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import './Edit.css'


function EditStudentInfo(){

   

    const[id,setId]=useState("");
    const[rollNo,setRollNo]=useState("");
    const[name,setName]=useState("");
    const[city,setCity]=useState("");
    const[dept,setDept]=useState("");

const saveId=(e)=>{
setId(e.target.value)
}
const saveRollNo=(e)=>{
    setRollNo(e.target.value)
}
const saveName=(e)=>{
    setName(e.target.value)
}
const saveCity=(e)=>{
    setCity(e.target.value)
}
const saveDept=(e)=>{
 setDept(e.target.value)
}

const nav =useNavigate()

 const saveData=(e)=>{
    e.preventDefault()
    const data={id,rollNo,name,city,dept}

   

    fetch("http://localhost:3006/StudenInfo/"+studentid,{
        method:"PUT"  ,
        headers:{"Content-type": "application/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Edited successfully..")
        nav('/')
        
        
    })
    .catch((err)=>{
        alert(err)
    })
 }

const {studentid}=useParams()

 useEffect(()=>{
    fetch("http://localhost:3006/StudenInfo/"+studentid)
    .then(res=>res.json())
    .then((resp)=>{
        setId(resp.id)
        setRollNo(resp.rollNo)
        setName(resp.name)
        setCity(resp.city)
        setDept(resp.dept)
    }
        
    )
    .catch(err=>err)
    },[])
    
    return(
        <div className="container">
            <div className='wrapper'>
            <h1>Edit Student data</h1>

            <form onSubmit={saveData}>
            <label>Id</label> 
            <br/>
            <input value={id} onChange={saveId} disabled="disabled" type="text"  /> 
            <br/>
            <label>Roll-No</label>
            <br/>
            <input value={rollNo} onChange={saveRollNo} type="text"/>
            <br/>
            <label>Name</label>
            <br/>
            <input value={name} onChange={saveName} type="text"/>
            <br/>
            <label>City</label>
            <br/>
            <input value={city} onChange={saveCity} type="text" />
            <br/>
            <label>Dept</label>
            <br/>
            <input  value={dept} onChange={saveDept} type="text"/>
            <br/><br/>
            <button type="submit" className="bn" >Save</button>
            <Link to="/studentlist"><button className="bn">Back</button></Link>

            </form>
        </div>
        </div>
    )

}

export default EditStudentInfo;