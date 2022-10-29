import React, { useState, useRef } from "react";
import { FormField, Label, Input, Button, Error } from "./styles";

function AdminNewCategoryForm({ setCategories, categories }) {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [show, setShow] = useState(false);

  const formReset = useRef()
  // Show or hide message
  function hideShow() {
    setShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category_name: category }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setCategories([...categories, data.body]);
          setMessage(data.message);
          setShow(true);
          formReset.current.reset()
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <h2>New Category</h2>
      <form className="signup-form form-div" onSubmit={handleSubmit} ref={formReset}>
        {show ? (
          <div className="alert">
            <span className="closebtn" onClick={hideShow}>
              &times;
            </span>
            <strong>{message}</strong>
          </div>
        ) : null}
        <FormField>
          <Label>Category Name</Label>
          <Input
            type={"text"}
            name="category_name"
            id="category_name"
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button type="submit">Add New Category</Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </div>
  );
}

export default AdminNewCategoryForm;
