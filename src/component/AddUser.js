import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
const AddUser = () => {
    const history = useHistory();
    const [inData, setInData] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const handleInput = (e) => {
  const name = e.target.name;
  const  value = e.target.value; 
  setInData({ ...inData, [name] : value})
    }

    // Send Form DAta to fake server 
    const onSubmit = async (e) =>{
        e.preventDefault()
             await axios.post("http://localhost:3001/user", inData);
             history.push('/')
    }
    return (
        <div className='container'>
           <div className="shadow-lg p-3 mb-5 bg-white rounded add_user">
           <h1 className='text-center  display-4'>Add User </h1>
            <form onSubmit={e => onSubmit(e)}>
            <input className="form-control " type="text" value={inData.name} onChange={handleInput} name='name' placeholder="Name" /> <br/>
            <input className="form-control " type="text" value={inData.username} onChange={handleInput} name='username' placeholder="User Name" /> <br/>
            <input className="form-control " type="text" value={inData.email} onChange={handleInput} name='email' placeholder="Email" /> <br/>
            <input className="form-control " type="text" value={inData.phone} onChange={handleInput} name='phone' placeholder="Phone" /> <br/>
            <input className="form-control " type="text" value={inData.website} onChange={handleInput} name='website' placeholder="Your Website" /> <br/>
            {/* <input type="submit" className=" btn btn-success" /> */}
            <button type='submit' className="btn btn-primary btn-block">Add</button>
            </form>
           </div>
        </div>
    );
};

export default AddUser;