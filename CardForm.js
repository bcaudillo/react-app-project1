import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function CardForm({handleAddCard}) {
  const blankState ={
      id: "",
      name: "",
      number_of_cards: "",
      spread_meaning: "",
    }
  
  const [formData, setFormData] = useState(blankState);
  
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
      e.preventDefault();
      const configObj={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
      fetch("http://localhost:3000/spread",configObj)
        .then((r) => r.json())
        .then((data)=>handleAddCard(data));
        setFormData(blankState)
  }
    
  return (
    <div>
      <h3>Add a tarot spread</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="name"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="spread meaning"
            placeholder="spread meaning"
            name="spread_meaning"
            value={formData.spread_meaning}
            onChange={handleChange}
          />
           <Form.Input
            fluid
            label="Number of Cards"
            placeholder="number of cards"
            name="number_of_cards"
            value={formData.number_of_cards}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default CardForm;
