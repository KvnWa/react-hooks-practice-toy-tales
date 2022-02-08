import React, { useState } from "react";

function ToyForm({addToy}) {

const [ name, setName ] = useState('')
const [ image, setImage ] = useState('')

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
   name: name,
   image: image 
  }
  fetch('http://localhost:3001/toys' , {
    method: "POST",
    headers: {
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data  => addToy(data))
}



  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
