import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Error, Input, Button, Label, Textarea , Success} from "./styles";

function EditNgo({ ngo, setNgo }) {
  // set the states
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    organization_name: ngo.organization_name,
    organization_email: ngo.organization_email,
    organization_phone_number: ngo.organization_phone_number,
    address: ngo.address,
    registration_number: ngo.registration_number,
    description: ngo.description,
  });

  // Hide show
  function hideShow(){
    setShow(false)
  }
  // navigation variable
  const navigate = useNavigate();
  // handle form control
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  // submit form data to server
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(false);

    fetch(`/ngos/${ngo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setNgo(data);
          console.log(data);
          setShow(true)
          setMessage(data.message);
          //   setIsLoading(true)
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  if (ngo){

  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Edit Organization</h2>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
        {show ?(
          <div className="alert">
            <span className="closebtn" onClick={hideShow}>&times;</span> 
            <strong>{message}</strong> 
          </div>): null}
        <FormField>
          <Label htmlFor="organization_name">Organization Name</Label>
          <Input
            type="text"
            name="organization_name"
            id="organization_name"
            value={formData.organization_name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="organization_email">Organization Email</Label>
          <Input
            type="text"
            name="organization_email"
            id="organization_email"
            value={formData.organization_email}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="organization_phone_number">
            Organization Phone Number
          </Label>
          <Input
            type="text"
            name="organization_phone_number"
            id="organization_phone_number"
            value={formData.organization_phone_number}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="registration_number">
            Licence Registration Number
          </Label>
          <Input
            type="text"
            name="registration_number"
            id="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <Textarea
            rows="10"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Button color="primary" type="submit">
            {isLoading ? "Loading..." : "Update"}
          </Button>
        </FormField>
      </form>
    </div>
  );
          }else{
              return<h2>Looading</h2>
          }
}

export default EditNgo;
