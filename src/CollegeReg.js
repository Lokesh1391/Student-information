
import { useRef } from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import './Registration.css'
import { Link } from "react-router-dom";



function CollegeReg(){

    const name=useRef();
    const email =useRef();
    const pswd = useRef();
    const cpswd = useRef(); 

    const nav= useNavigate()

const firebaseConfig = {
  apiKey: "AIzaSyA_-jn2P7tF-Wkm48Ha5NXCVHEtDGNzPBE",
  authDomain: "student-info-2da06.firebaseapp.com",
  projectId: "student-info-2da06",
  storageBucket: "student-info-2da06.appspot.com",
  messagingSenderId: "793547166347",
  appId: "1:793547166347:web:00f8221129a4d9b08e3a8e"
};


  
  
  const app = initializeApp(firebaseConfig);
  const auth =getAuth();

 

  const store=(e)=>{
    e.preventDefault();

    if(name.current.value==""||email.current.value==""||pswd.current.value==""||cpswd.current.value==""){
        alert("All fealds are manditatory")
      } 
      else if (pswd.current.value != cpswd.current.value){
        alert("Password Dismatch")
      }

    let obj ={
        em: email.current.value,
        pas: pswd.current.value
      }
    

    createUserWithEmailAndPassword(auth,obj.em,obj.pas)

  .then(()=>{
    alert("Register Success")
    nav('/login')
  })
  .catch((err)=>err)


}

    return(
        <div>
            <form onSubmit={store} className="reg">
                <label>User Name</label>
                <input type="text" ref={name} />
                <br></br><br></br>
                <label>Email</label>
                <input type="email" ref={email}/>
                <br/><br/>
                <label>Password</label>
                <input type="password" ref={pswd}/>
                <br/><br/>
                <label>Conform Password</label>
                <input type="password" ref={cpswd}/>
                <br/><br/>
              
                <button type="submit" className="bbt">Regiser</button>
                <br/>
                <Link to="/login"><button type="submit" className="bbtl">Log-in</button></Link>
               
            </form>
        </div>
    )
}
export default CollegeReg;