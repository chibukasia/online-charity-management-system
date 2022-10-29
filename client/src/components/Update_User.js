import "./Profile.css"
import './styles/Loader.css'
import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "./styles";

const EditUserProfile = ({user, setUser}) => {
    const [errors, setErrors] = useState([])
    const [show, setShow] = useState(false) 
    const [message, setMessage] = useState('')
    
    
    let [data, setData] = useState({
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      phone_number: user.phone_number
    })

    // Handle form control
    function handleChange(e){
      let name = e.target.name 
      let value = e.target.value 

      setData({...data, [name]: value})
    }

    // Show or hide message
    function hideShow(){
      setShow(false)
    }

    // Handle form submit
    function handleSubmit(e){
      e.preventDefault()

      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res=>{
        if(res.ok){
          res.json().then(data=>{
            console.log(data)
            setUser(data.body)
            setMessage(data.message)
            setShow(true)
          })
        }else{
          res.json().then(err=>setErrors(err.errors))
        }
      })
    }
    if(user){
    return ( 
        <form className="form-div animate-bottom" onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>
          {show ?(
          <div className="alert">
            <span className="closebtn" onClick={hideShow}>&times;</span> 
            <strong>{message}</strong> 
          </div>): null}
          <FormField>
            {errors.map(err=><Error key={err}>{err}</Error>)}
          </FormField>
          <FormField>
            <Label htmlFor="first_name">Edit First Name</Label>
            <Input type={'text'} name="first_name" value={data.first_name} id="first_name" onChange={handleChange}/>
          </FormField>
          <FormField>
            <Label htmlFor="last_name">Edit Last Name</Label>
            <Input type={'text'} name="last_name" value={data.last_name} id="last_name" onChange={handleChange}/>
          </FormField>
          <FormField>
            <Label htmlFor="username">Edit Username</Label>
            <Input type={'text'} name="username" value={data.username} id="username" onChange={handleChange}/>
          </FormField>
          <FormField>
            <Label htmlFor="email">Change Email</Label>
            <Input type={'text'} name="email" value={data.email} id="email" onChange={handleChange}/>
          </FormField>
          <FormField>
            <Label htmlFor="phone_number">Edit Phone Number</Label>
            <Input type={'text'} name="phone_number" value={data.phone_number} id="phone_number" onChange={handleChange}/>
          </FormField>
          <FormField>
            <Button type='submit'>Update Profile</Button>
          </FormField>
        </form>
     );
    }
    else{
      return <div className="loader"></div>
    }
}
 
export default EditUserProfile;
