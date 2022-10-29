import React, { useEffect, useState, useRef } from "react";
import { FormField, Error, Input, Button, Label, Textarea } from "./styles";
import './requestForm.css'
import { useNavigate } from "react-router-dom";

function DonationRequestForm({user, setNgoRequests, ngoRequests, ngo}) {
  const [categoryNames, setCategoryNames] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [ngo, setNgo] = useState(null)

  const navigate = useNavigate()
  const formReset = useRef()
  // Get all the categories
  useEffect(() => {
   
      fetch("/categories").then((res) => {
        if (res.ok) {
          res.json().then((categories) => setCategoryNames(categories));
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
  }, []);
  
  // submit form data to the server
  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(false)

    // create the fprm data object
    const formData = new FormData()
    formData.append("title", e.target.title.value)
    formData.append("description", e.target.description.value)
    formData.append("target_amount", e.target.target_amount.value)
    formData.append("amount_raised", 0)
    formData.append("category_id", e.target.category_id.value)
    formData.append("status", "pending")
    formData.append("open", true)
    formData.append("ngo_id", ngo.id)
    formData.append("image", e.target.image.files[0])
    formData.append("bank_statement", e.target.bank_statement.files[0]) 
    

    // POST the form data to the server
    fetch("/donation_requests",{
        method: "POST",
        body: formData
    })
    .then(res=>{
        if(res.ok){
            res.json().then(data=>{
              setNgoRequests([...ngoRequests, data])
                setIsLoading(true)
                navigate('/ngo_dashboard/ngo_requests')
                formReset.current.reset()
            })
        }else{
            
            res.json().then(err=>setErrors(err.errors))
        }
    })
  }

  return (
    <div className="form-div">
      <h2>Donation Request Form</h2>
      <form encType="multipart/form-data" className="form" onSubmit={handleSubmit} ref={formReset}>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
        <FormField>
          <p>Required <span style={{color: "red"}}>*</span></p>
        </FormField>
        <FormField>
          <Label htmlFor="title">Donation request title<span style={{color: "red"}}>*</span></Label>
          <Input type="text" name="title" id="title" />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description<span style={{color: "red"}}>*</span></Label>
          <Textarea rows="10" name="description" />
        </FormField>
        <FormField>
          <Label htmlFor="target_amount"> Target Amount<span style={{color: "red"}}>*</span></Label>
          <Input type="number" name="target_amount" id="target_amount" />
        </FormField>
        <FormField>
          <Label htmlFor="category_id">Select Category<span style={{color: "red"}}>*</span></Label>
          <select name="category_id" id="category_id" >
            {categoryNames.map((categoryName) => {
              return (
                <option value={categoryName.id} key={categoryName.id}>
                  {categoryName.category_name}
                </option>
              );
            })}
          </select>
        </FormField>
        <FormField>
          <Label htmlFor="image">Upload Supporting Image<span style={{color: "red"}}>*</span></Label>
          <Input type="file" name="image" id="image" />
        </FormField>
        <FormField>
          <Label htmlFor="bank_statement">Upload latest bank statement<span style={{color: "red"}}>*</span></Label>
          <Input type="file" name="bank_statement" id="bank_statement" />
        </FormField>
        <FormField>
          <Button color="primary" type="submit">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </FormField>
      </form>
    </div>
  );
}

export default DonationRequestForm;
