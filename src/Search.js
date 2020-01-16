import React , {useContext, useEffect, useState} from 'react'
import {SearchAddress} from './Map.js'
import {db } from './Config.js'

const Search = () => {
    const [search , setSearch] =  useState([])
    const address =  useContext(SearchAddress)
    const [items,setItem] =  useState([])
    
    
    useEffect(() => {

        console.log("Here Address:",address)
        db.collection("teachers")
        .get()
        .then(snapshot => {
            console.log("Sanp Shot" , snapshot)
            const addresses = []
            snapshot.forEach(doc => {
                const data = doc.data()
                addresses.push(data)
                console.log(addresses)
            })
            setSearch(addresses)

        })
        .catch(error => console.log("Getting response error:",error))
    } ,[])


    const handleClickRemove = (email , name) => {
        const index = items.indexOf(email);
        if (index > -1) {
        
          items.splice(index, 1);
          setItem([...items])
          console.log(items)
          alert(`Removed ${name}`)
        }
        
    }    

    const handleClick = (email, name) => {
            const found =  items.indexOf(email)
            if(found < 0){
            setItem( [...items,email] )
            console.log(items)
            alert(`Selected ${name}`)
            }
        }
 
    return (
        <React.Fragment>
<h3 class="text-center text-uppercase bg-light font-weight-bold">Search Result {address}</h3>
            {
                search && 
                search.map(s =>{
                    if(address.includes(s.address)){
                    return(
                        <div class="card w-100" key={s.email}>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{s.name}</h5>
                            <p class="card-text">Email : {s.email}</p>
                            <p class="card-text">Address : {s.address}</p>
                            
                            { 
                            items.indexOf(s.email) < 0 ? 
                            (
                                <button onClick= { () => handleClick(s.email , s.name)} class="btn btn-info">Select</button>
                            ) 
                            : 
                            (
                                <button onClick= { () => handleClickRemove(s.email , s.name)} class="btn btn-danger">Remove</button>
                            )
                            }

                        </div>
                        </div>
                        )
                    }
                })
            }
        </React.Fragment>
    )
}

export default Search
