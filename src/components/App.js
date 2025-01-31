import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  function deleteToy(id) {
    const withoutToy = toys.filter(toy => {return toy.id !== id})
    setToys(withoutToy)
  }

  function updateLike(upToy) {
    const toyLikes = toys.map(toy => { return toy.id === upToy.id ? upToy : toy})
    setToys(toyLikes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateLike={updateLike}/>
    </>
  );
}

export default App;
