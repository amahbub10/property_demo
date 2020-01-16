import React,{useState , useEffect , useCallback} from 'react'
import {fire}  from './Config.js'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login.js'
import { useHistory } from "react-router-dom";
import Map from './Map'
import Filter from './Filter'

function Dashboard() {

    const history =  useHistory()
    const logOut = () =>{
        
        fire.auth().signOut().then(function() {
            localStorage.clear();
            history.push("/")
          }, function(error) {
            console.error('Sign Out Error', error);
          })
    }
    
    useEffect(() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (!user) {
                history.push("/")
            } else {
                history.push("/home")
            }
          })

    },[])

    return (
        <div class="container-fluid">
            <div class="d-flex flex-row ">
                <div class="p-2 mr-auto"><h3 class="text-uppercase  font-weight-bold">Dashboard</h3></div>
                <div class="p-2"><button class="btn btn-danger" onClick= {logOut}>Log Out</button> </div>
            </div>
            <div class="d-flex flex-row justify-content-between container mt-2">
                    <div class="p-2 w-50">
                        <Filter/>
                    </div>
                    <div class="p-2 w-50">
                        <Map/>
                    </div>
            </div>
        </div>
       ) 
}

export default Dashboard
