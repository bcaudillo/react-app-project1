import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function CardForm({onAddCard}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    number_of_cards: "",
    spread_meaning: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    const newCard = {
      id: formData.id,
      name: formData.name,
      number_of_cards: formData.number_of_cards,
      spread_meaning: formData.spread_meaning,
    };

    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((r) => r.json())
      .then(onAddCard);
  }

  return (
    <div>
      <h3>Create your own card</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
        <Form.Input
            fluid
            label="id"
            placeholder="enter value greater than 78"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
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
