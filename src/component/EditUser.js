import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useParams,  } from 'react-router-dom';


const EditUser = () => {
    const {id} = useParams();
    // alert(id)
    const history = useHistory();
    const [inData, setInData] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const handleInput = (e) => {
  let name = e.target.name;
  let  value = e.target.value; 
  setInData({ ...inData, [name] : value})
    }

    // Send Form DAta to fake server 
    const onSubmit = async (e) =>{
        e.preventDefault()
             await axios.put(`http://localhost:3001/user/${id}`, inData);
             history.push('/')
    }


   // load user for editing bro 
   const loadUser  = async () => {
   const res =  await axios.get(`http://localhost:3001/user/${id}`);
    setInData(res.data)

}
    useEffect(() =>{
        loadUser();
    }, [])
 

    return (
        <div className='container'>
           <div className="shadow-lg p-3 mb-5 bg-white rounded add_user">
           <h1 className='text-center  display-4 my-2'>Update User </h1>
            <form onSubmit={e => onSubmit(e)}>
            <input className="form-control " type="text" value={inData.name} onChange={handleInput} name='name' placeholder="Name" /> <br/>
            <input className="form-control " type="text" value={inData.username} onChange={handleInput} name='username' placeholder="User Name" /> <br/>
            <input className="form-control " type="text" value={inData.email} onChange={handleInput} name='email' placeholder="Email" /> <br/>
            <input className="form-control " type="number" value={inData.phone} onChange={handleInput} name='phone' placeholder="Phone" /> <br/>
            <input className="form-control " type="text" value={inData.website} onChange={handleInput} name='website' placeholder="Your Website" /> <br/>
            {/* <input type="submit" className=" btn btn-success" /> */}
            <button type='submit' className="btn btn-danger btn-block">Update User</button>
            </form>
           </div>
        </div>
    );
};

export default EditUser;