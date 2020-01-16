import React ,{useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap'
import {db , auth} from './Config.js'
import { fire } from './Config.js'
import { useHistory } from "react-router-dom";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

function Register(props) {

    const intialState = {
        "firstName" : '',
        "lastName" : '' ,
        "email" : '',
        "password" : '',
        "confirmPass"  : '',
        "contact" : '',

    }
    const [form , setForm ] =  useState(intialState)
    const [address, setAddress] = useState('')

    const [user , setuser] = useState(false)
    let history = useHistory()
    const handleChange = address => {
        setAddress( address );
      };
     
     const handleSelect = address => {
        setAddress(address)
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };

    const handleButtonTeacher = () =>{
        window.alert('Data Saved')
        db.collection('teachers').add({
            name : form.firstName + ' ' + form.lastName,
            email :  form.email,
            password : form.password,
            confirmPass :  form.confirmPass,
            contact : form.contact,
            address : address
        })

        fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((u) => {
            history.push("/")
            console.log('Successfully Signed Up');
          
        })
        .catch((err) => {
          console.log('Error: ' + err.toString());
        })
    
    setForm(intialState)
    setuser(true)
    }
   
    const handleButtonStudent = () =>{
        window.alert('Data Saved')
        db.collection('students').add({
            name : form.firstName + ' ' + form.lastName,
            email :  form.email,
            password : form.password,
            confirmPass :  form.confirmPass,
            contact : form.contact,
            address :  address
        })
    
    setForm(intialState)
    setuser(true)
    }

    return (
        <div>
        <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Already Registered?</p>
                        <a href="/"><input type="submit" name="" value="Login"/><br/></a>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Teacher</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Student</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as an Engineer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" value={form.firstName} onChange = {(e) => setForm({ ...form , firstName : e.target.value})} placeholder="First Name *" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" value={form.lastName} onChange = {(e) => setForm({ ...form , lastName : e.target.value})} placeholder="Last Name *" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" value={form.password} onChange = {(e) => setForm({ ...form , password : e.target.value})} placeholder="Password *" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" value={form.confirmPass} onChange = {(e) => setForm({ ...form , confirmPass : e.target.value})}  placeholder="Confirm Password *"  />
                                        </div>

                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" value={form.email} onChange = {(e) => setForm({ ...form , email : e.target.value})} placeholder="Your Email *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="11" value={form.contact} onChange = {(e) => setForm({ ...form , contact : e.target.value})} name="txtEmpPhone" class="form-control" placeholder="Your Phone *" />
                                        </div>
                                        <PlacesAutocomplete
                                            value={address}
                                            onChange={handleChange}
                                            onSelect={handleSelect}
                                            >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    {...getInputProps({
                                                    placeholder: 'Search Places ...',
                                                    
                                                    })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                        <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                        >
                                                        <span>{suggestion.description}</span>
                                                        </div>
                                                    );
                                                    })}
                                                </div>
                                                </div>
                                            )}
                                         </PlacesAutocomplete>
                                        <input type="submit" class="btnRegister" onClick ={handleButtonTeacher}  value="Register"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hiarer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" value={form.firstName} onChange = {(e) => setForm({ ...form , firstName : e.target.value})} placeholder="First Name *"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" value={form.lastName} onChange = {(e) => setForm({ ...form , lastName : e.target.value})} placeholder="Last Name *" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" value={form.password} onChange = {(e) => setForm({ ...form , password : e.target.value})} placeholder="Password *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" value={form.confirmPass} onChange = {(e) => setForm({ ...form , confirmPass : e.target.value})}  placeholder="Confirm Password *"  />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" value={form.email} onChange = {(e) => setForm({ ...form , email : e.target.value})} placeholder="Your Email *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="11" value={form.contact} onChange = {(e) => setForm({ ...form , contact : e.target.value})} name="txtEmpPhone" class="form-control" placeholder="Your Phone *" />
                                        </div>
                                        <PlacesAutocomplete
                                            value={address}
                                            onChange={handleChange}
                                            onSelect={handleSelect}
                                            >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    {...getInputProps({
                                                    placeholder: 'Search Places ...',
                                                    
                                                    })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                        <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                        >
                                                        <span>{suggestion.description}</span>
                                                        </div>
                                                    );
                                                    })}
                                                </div>
                                        </div>
                                            )}
                                         </PlacesAutocomplete>
                                        <input type="submit" class="btnRegister" onClick ={handleButtonStudent}  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )  
        </div>
    ) 
}

export default Register
