import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Footer() {
  const [inputData, setInputData] = useState({});
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(inputData);
  };

  const validate = (value) => {
    let err = {};
    if (!value.first_name) {
      err.first_name = "name is required";
    }
    if (!value.email) {
      err.email = "email is required";
    }
    if (!value.message) {
      err.message = "message is required";
    }

    if (Object.keys(err).length > 0) {
      setError(err);
    } else {
      console.log(inputData);
      setError({});
      setInputData({ first_name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="first_name"
          value={inputData.first_name}
          onChange={handleChange}
        />
        <p>{error.first_name}</p>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
        />
        <p>{error.email}</p>
        <input
          type="text"
          placeholder="message"
          name="message"
          value={inputData.message}
          onChange={handleChange}
        />
        <p>{error.message}</p>
        <Button type="submit">Submit</Button>
      </Form>
      <h1>Hi How arw you</h1>
      <h1>Hi How arw you</h1>
      <h1>Hammad Nadir</h1>
    </div>
  );
}

export default Footer;
