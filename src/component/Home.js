import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Home = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
            generateUser();
    }, [])

    const generateUser = async () => {
        const res = await axios.get('http://localhost:3001/user') ;
        setUser(res.data);
}

                // delete user 
                const deleteUser = async (id) => {
                    await axios.delete(`http://localhost:3001/user/${id}`) 
                    generateUser();
                }

              
    return (
        <div className='container'>        
            <div className="py-5">
            <table className="table  rounded">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
   
         {
             user.map((data, index) => (
                <tr key={data.id} >
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                        <Link to={`/user/viewUser/${data.id}`} className='btn btn-primary mr-2'>View</Link>
                        <Link to={`/user/editUser/${data.id}`} className='btn btn-outline-primary mr-2'>Edit</Link>
                        <Link  onClick={() => deleteUser(data.id)} className='btn btn-danger mr-2'>Delete</Link>
                      
                    </td>
                </tr>
             ))
         }
      
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;