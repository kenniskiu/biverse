import React,{useState} from "react";
import { CircleButton,ConvertButton } from './CircleButton';
import { Form, InputGroup } from "react-bootstrap";

export function Exchange(){
  const [stateCurrency,setStateCurrency] = useState("");
  const [stateBiverse,setStateBiverse] = useState("");
  const [input,setInput] = useState(null)

  function getInput(val){
    setInput(val.target.value)
  }
    return(
        <>
        <span className="headerColor1">Swap</span>
        <text className="verse2">From:</text>
        <div className="drop">
        <InputGroup>
        <Form.Select
          size="sm"
          onChange={(e)=>{
            const selectedState=e.target.value;
            setStateCurrency(selectedState)
          }}>
            <option value="Near">Near</option>
            <option value="1">1</option>
        </Form.Select>
        <Form.Control size="sm" type="text" placeholder="Small text" />
        </InputGroup>
      </div>
        <CircleButton></CircleButton>
        <span className="verse3">To</span>
        <div className="drop">
        <InputGroup>
        <Form.Select
          size="sm"
          onChange={(e)=>{
            const selectedState=e.target.value;
            setStateBiverse(selectedState)
          }}>
            <option value="Near">Biverse</option>
            <option value="1">1</option>
        </Form.Select>
        <Form.Control size="sm" type="text" placeholder="Small text" onChange={getInput}/>
        </InputGroup>

      </div>
        <ConvertButton></ConvertButton>
        </>
    )

}
