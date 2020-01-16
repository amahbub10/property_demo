import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import {db , auth} from './Config.js'
import { fire } from './Config.js'
import { useHistory } from "react-router-dom";

function Login() {
    
    

    const intialState = {
        "email" : '',
        "password" : '',
    }

    
    let history = useHistory()
    const [form , setForm]  = useState(intialState)
    const handleLoginButton = () => {
    
    fire.auth().signInWithEmailAndPassword(form.email.toString(), form.password)
      .then((u) => {
        console.log("Signed In")
        history.push("/home")

      })
      .catch((err) => {
        console.log('Error login: ' + err.toString());
      })

    }

    return (
    <div class="container log">
        <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
            <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <div class="form-signin">
                <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" value={form.email} onChange = {(e) => setForm({ ...form , email : e.target.value})} placeholder="Email address" required autofocus />
                    <label for="inputEmail">Email address </label>
                </div>

                <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" value={form.password} onChange = {(e) => setForm({ ...form , password : e.target.value})} placeholder="Password" required/>
                    <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={handleLoginButton} type="submit">Sign in</button>
                <hr class="my-4" />
                </div>
                Not have an Account? 
                <a href="/register">Register</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Login
