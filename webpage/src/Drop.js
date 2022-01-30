import React,{useState} from "react"
import { Form, InputGroup } from "react-bootstrap";

export function Drop(){
  const currency = ['Near','a','b']
  const [state,setState] = useState("");
    return(
      <div className="drop">
        <InputGroup>
        <Form.Select
          size="sm"
          onChange={(e)=>{
            const selectedState=e.target.value;
            setState(selectedState)
          }}>
            <option value="Near">Near</option>
            <option value="1">1</option>
        </Form.Select>
        <Form.Control size="sm" type="text" placeholder="Small text" />
        </InputGroup>
      </div>
    )
  }

