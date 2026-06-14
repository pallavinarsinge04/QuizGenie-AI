import {useEffect,useState} from "react";

import API from "../api/axios";

function ManageUsers(){

const[users,setUsers]=useState([]);

useEffect(()=>{

loadUsers();

},[]);

const loadUsers=async()=>{

const res=await API.get("/admin/users");

setUsers(res.data);

}

return(

<div>

<h1>Users</h1>

{

users.map(user=>(

<div key={user._id}>

<h3>{user.name}</h3>

<p>{user.email}</p>

</div>

))

}

</div>

);

}

export default ManageUsers;