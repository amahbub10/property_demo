import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { resetWarningCache } from 'prop-types'

function Filter() {
    return (
        <div>
            <h3 class="text-uppercase font-weight-bold">Advance Search</h3>
            <form >
            <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                <input type="text" class="form-control" placeholder="search" aria-label="Search" />

            </div>
            <div class="form-group">
                <label for="sel1"><strong>Choose Suppliers</strong></label>
                <select class="form-control" id="sel1" name="sellist1">
                    <option>Architect</option>
                    <option>Civil Engineer</option>
                    <option>Workers</option>
                    <option>Project Manager</option>
                </select>
                <br/>
                
                    <label htmlFor="">Designation</label>
                    <select class="form-control" id="sel1" name="sellist1">
                        <option>Archittect Manager</option>
                        <option>Senior Architect Engineer</option>
                        <option>Junior civil Engineer</option>
                        <option>project Architect manager</option>
                    </select>

                    
                <br/>

                <button type="submit" class="btn btn-primary" style={{marginBottom:'2rem'}}>Submit</button>

                <div>
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="card"style={{ width: '15rem' }}>
                            <img class="card-img-top" src="https://www.careeraddict.com/uploads/article/55009/architect-construction-plans.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Architecture</h5>
                                <p class="card-text">Some quick example text to build on the card title </p>
                                <a href="#" class="btn btn-danger">View</a>

                                <a href="#" class="btn btn-primary " style={{float:'right'}}><i class="fa fa-shopping-cart"></i></a>

                               
                               

                            </div>
                            

                            </div>


                        </div>
                        <div class="col-sm-5" style={{marginLeft:'5rem',marginBottom:'2rem'}}>
                            <div class="card"style={{ width: '15rem' }}>
                                <img class="card-img-top" src="https://inteng-storage.s3.amazonaws.com/img/iea/bM6A1xZR67/sizes/civil-engineering_resize_md.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Civil Engineer</h5>
                                    <p class="card-text">Some quick example text to build on the card title </p>
                                    <a href="#" class="btn btn-danger">View</a>
                                    <a href="#" class="btn btn-primary " style={{float:'right'}}><i class="fa fa-shopping-cart"></i></a>


                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-5">
                            <div class="card"style={{ width: '15rem' }}>
                            <img class="card-img-top" src="https://www.think-architects.ch/fileadmin/_processed_/b/4/csm_think_architecture_profile_01_7891830c92.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Workers</h5>
                                <p class="card-text">Some quick example text to build on the card title </p>
                                <a href="#" class="btn btn-danger">View</a>
                                <a href="#" class="btn btn-primary " style={{float:'right'}}><i class="fa fa-shopping-cart"></i></a>


                            </div>

                            </div>


                        </div>
                        <div class="col-sm-5" style={{marginLeft:'5rem'}}>
                            <div class="card"style={{ width: '15rem' }}>
                                <img class="card-img-top" src="https://www.think-architects.ch/fileadmin/_processed_/b/4/csm_think_architecture_profile_01_7891830c92.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Project manager</h5>
                                    <p class="card-text">Some quick example text to build on the card title </p>
                                    <a href="#" class="btn btn-danger">View</a>
                                    <a href="#" class="btn btn-primary " style={{float:'right'}}><i class="fa fa-shopping-cart"></i></a>

                                    

                                </div>

                                

                            </div>
                        </div>

                       
                        
                    </div>

                </div>

            </div>
                
            </form>
        </div>
    )
}

export default Filter
