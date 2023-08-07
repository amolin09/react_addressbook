import React, { useState, useEffect } from 'react'

import axios from 'axios';

import './App.css';

import ContactCard from './Components/ContactCard'

function AddressBookFunction(){
  const [arrayOfUsers, setArrayOfUsers] = useState([])

  useEffect(()=>{
    axios.get("https://randomuser.me/api?results=25")
      .then(res => {
        const contacts = res.data.results
        setArrayOfUsers(contacts)
      })
    }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Address Book</h1>
        {
          arrayOfUsers.map((contact, index)=>{
          return(
           <ContactCard key={index} contactInfo={contact}/> 
          );
        })
        }
      </header>
    </div>
  );
  
}

export default AddressBookFunction;
