import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './StudentForm.css'


function Studentform(){

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

const nav=useNavigate()

 const saveData=(e)=>{
    e.preventDefault()
    const data={id,rollNo,name,city,dept}
    fetch("http://localhost:3006/StudenInfo",{
        method:"POST",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Registered successfully..")
        nav('/studentlist')
    })
    .catch((err)=>{
        alert("error"+err)
    })
 }


    return(
        <div className="container">
            <div className='wrapper'>
            <h1 className='h1'>Add Student data</h1>

            <form onSubmit={saveData}>
            <label>Id</label> 
            <br/>
            <input className='input' value={id} onChange={saveId} type="text" disabled="disable" /> 
            <br/>
            <label>Roll-No</label>
            <br/>
            <input className='input' value={rollNo} onChange={saveRollNo} type="text"/>
            <br/>
            <label>Name</label>
            <br/>
            <input className='input' value={name} onChange={saveName} type="text"/>
            <br/>
            <label>City</label>
            <br/>
            <input className='input' value={city} onChange={saveCity} type="text" />
            <br/>
            <label>Dept</label>
            <br/>
            <input className='input'  value={dept} onChange={saveDept} type="text"/>
            <br/><br/>
            <button className='button' type="submit" >Register</button>
            <Link to="/studentlist"><button className='button'>Back</button></Link>

            </form>
        </div>
        </div>
    )
}
export default Studentform;