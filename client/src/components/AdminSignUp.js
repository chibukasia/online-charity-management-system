import React, {useState} from "react";
import Label from "./styles/Label";
import Input from "./styles/Input";
import FormField from './styles/FormField';
import Button from "./styles/Button";
import Error from "./styles/Error";


function AdminSignUp({setAdmin}) {

    // use states
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    // handle form change
    function handleChange (e){
        let name = e.target.name
        let value = e.target.value

        setFormData({...formData, [name]:value})
    }

    //submit data to the server
    function handleSubmit (e){
        e.preventDefault()
        setIsLoading(false)

        fetch ("/admin_signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok){
                res.json().then(admin => setAdmin(admin))
            }else{
                res.json().then(error => setErrors(error.errors))
            }
        })
    }
  return (
    <div>
      <h2>Create an Admin</h2>
      <form onSubmit = {handleSubmit} className="signup-form form-div">
      {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
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
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
      </form>
    </div>
  );
}

export default AdminSignUp;
