import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import StudentList from './StudentList';
import Studentform from './StudentForm';
import EditStudentInfo from './EditStudentInfo';
import ViewDetails from './ViewDetails';
import CollegeReg from './CollegeReg';
import Login from './Login';

function App(){
    return(
        <div>

            <Router>

                <Routes>
                    <Route path='/studentlist' element={<StudentList/>}/>
                <Route path='/form' element={<Studentform/>}/>
                <Route path='/editInfo/:studentid' element={<EditStudentInfo/>} />
                <Route path='/viewdetails/:studentid' element={<ViewDetails/>}/>
                <Route path='/' element={<CollegeReg/>}/>
                <Route path='/login' element={<Login/>}/>
                </Routes>
            </Router>
           
        </div>
    )
}
export default App;