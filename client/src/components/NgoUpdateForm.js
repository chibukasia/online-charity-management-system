import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { FormField, Error, Input, Button, Label, Textarea } from "./styles";


function NgoRegistrationForm(props) {

  // set the states
  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    organization_name: '',
    organization_email: '',
    organization_phone_number:'',
    address: '',
    registration_number: '',
    description: ''

  })

  // navigation variable
  const navigate = useNavigate()
  // handle form control
  function handleChange(e){
      let name = e.target.name
      let value = e.target.value

      setFormData({...formData, [name]: value})
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let result =await fetch("" + props.match.params.id);
    result =await result.json();
    setData(result)
  })

  // submit form data to server
  function handleSubmit(e){
      e.preventDefault()
      setIsLoading(false)

      fetch("/ngos", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      })
      .then(res=>{
          if(res.ok){
              res.json().then(data=>{
                  console.log(data)
                  setIsLoading(true)
                  navigate('/ngo_dashboard')
              })
          }else{
              res.json().then(err=>setErrors(err.errors))
          }
      })
  }

  return (
    <div className='form-div'>
        <form className='form' onSubmit={handleSubmit}>
            <FormField>
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
            </FormField>
            <FormField>
                <Label htmlFor='organization_name'>Organization Name</Label>
                <Input type="text" defaultValue={data.organization_name} name="organization_name" id='organization_name' onChange={handleChange}/>
            </FormField>
            <FormField>
                <Label htmlFor='organization_email'>Organization Email</Label>
                <Input type="text" defaultValue={data.organization_email} name="organization_email" id='organization_email' onChange={handleChange}/>
            </FormField>
            <FormField>
                <Label htmlFor='organization_phone_number'>Organization Phone Number</Label>
                <Input type="text" defaultValue={data.organization_phone_number} name="organization_phone_number" id='organization_phone_number' onChange={handleChange}/>
            </FormField>
            <FormField>
                <Label htmlFor='address'>Address</Label>
                <Input type="text" defaultValue={data.address} name="address" id='address' onChange={handleChange}/>
            </FormField>
            <FormField>
                <Label htmlFor='registration_number'>Licence Registration Number</Label>
                <Input type="text" defaultValue={data.registration_number} name="registration_number" id='registration_number' onChange={handleChange}/>
            </FormField>
            <FormField>
                <Label htmlFor="description">Description</Label>
                <Textarea rows="10" defaultValue={data.description} name="description" id="description" onChange={handleChange}/>
            </FormField>
            <FormField>
                        {/* submit button */}
                <Button color="primary" type="submit">
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
                        {/* update button, and find a way to link the page to the update page */}
                <Link to={"update/"}>
                <Button color="primary" type="Update">
                    {isLoading ? "Loading..." : "Update"}
                </Button>
                </Link>
            </FormField>

        </form>
    </div>
  )
}

export default withRouter(NgoRegistrationForm)

