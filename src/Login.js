import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { initializeApp } from "firebase/app";
import{ signInWithEmailAndPassword, getAuth} from 'firebase/auth'

import { Link } from "react-router-dom";
function Login(){


    const email =useRef();
    const pswd = useRef();


    const firebaseConfig = {
        apiKey: "AIzaSyA_-jn2P7tF-Wkm48Ha5NXCVHEtDGNzPBE",
        authDomain: "student-info-2da06.firebaseapp.com",
        projectId: "student-info-2da06",
        storageBucket: "student-info-2da06.appspot.com",
        messagingSenderId: "793547166347",
        appId: "1:793547166347:web:00f8221129a4d9b08e3a8e"
      };

   
      const nav = useNavigate();

        
  const app = initializeApp(firebaseConfig);
  const auth =getAuth();

  const get=(e)=>{
    e.preventDefault();

    if(email.current.value==""||pswd.current.value==""){
        alert("All fealds are manditatory")
      } 

    let obj ={
        em: email.current.value,
        pas: pswd.current.value
      }
      signInWithEmailAndPassword(auth,obj.em,obj.pas)
      .then(()=>{
        alert("Success")
        nav('/studentlist')
      }).catch((err)=>{
        
        alert("Password dismatch"+err)})

    }
    return(
        <div>

                <form onSubmit={get} className="reg">
                    <label>Email</label>
                    <input type="email" ref={email}/>
                    <br/><br/>
                    <label>Password</label>
                    <input type="password" ref={pswd}/>
                    <br/><br/>
                    <button type="submit" className="bbt">Log-In</button>
                    <br/>
                    <Link to="/"><button type="submit" className="bbtl">Register</button></Link>
                </form>
        </div>
    )
}
export default Login; 