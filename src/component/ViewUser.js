import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';

const ViewUser = () => {

const [view, setView] = useState([]);


const {id} = useParams(); 
useEffect(() =>{
    loadUser();
},[])
const loadUser  = async () => {
    const res =  await axios.get(`http://localhost:3001/user/${id}`);
     setView(res.data);
   
 
 }
    const {name, email, username, phone,website} = view;
    return (
       <>
            <h1 className="display-4 text-center">View User Details</h1>
            <Link className="btn btn-primary text-center" to='/'>Go Home</Link>
       <table className="table">
       <thead className="thead-dark">
        
       </thead>
       <tbody>
         <tr>
             <td>{name}</td>
         </tr>
         <tr>
             <td>{username}</td>
         </tr>
         <tr>
             <td>{email}</td>
         </tr>
         <tr>
             <td>{phone}</td>
         </tr>
         <tr>
             <td>
                 {website}
             </td>
         </tr>
       </tbody>
     </table>
   
        </>
    );
};

export default ViewUser;