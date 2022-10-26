import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Error, Input, FormField, Label } from "./styles";

function SignUpForm({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // set the navigate variable
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
    role: "",
  });

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/user_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          if(user.role === "donor"){
            navigate('/home')
          }else{
            navigate('/ngo_registration')
          }
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
      <FormField>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          name="first_name"
          autoComplete="off"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          name="last_name"
          autoComplete="off"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          autoComplete="off"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="phone_number">Phone Number</Label>
        <Input
          type="text"
          id="phone_number"
          name="phone_number"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="donor"
            onChange={handleChange}
            value="donor"
          />
          <label className="form-check-label" htmlFor="donor">
            Donor
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="ngo"
            onChange={handleChange}
            value="ngo"
          />
          <label className="form-check-label" htmlFor="ngo">
            NGO
          </label>
        </div>
      </FormField>

      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
    </form>
  );
}

export default SignUpForm;
