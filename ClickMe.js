import React,{useState} from "react";
import { Form } from "semantic-ui-react";
//return a div that says click me
//Add number of characters to total displayed value

function ClickMe(){
    const [clickCount, setClickCount]=useState(0)
    const [inputValue, setInputValue]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        return setClickCount(clickCount+inputValue.length)
    }
    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Input
                fluid
                label="text"
                placeholder="text"
                text="text"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <Form.Button>Click Me</Form.Button>

          </Form>,
          <h1>
              {clickCount}
          </h1>
        </div>
       
    )
}

export default ClickMe;