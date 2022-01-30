import React, {useState} from 'react';
import './App.css'
import { Card} from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
import Cookies from 'js-cookie'

const axios = require('axios');

export default function Validation() {
  const [code,setCode] = useState('');
  const [count,setCount] = useState(0);
  const {id} = useParams();
  let navigate=useNavigate();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    axios({
			method: 'post',
			url:
      `http://localhost:3001/verification/${id}`,
			data: { 
        code : code,
      }
		}).then((response) => {
      Cookies.set("userID",response.data.data)
      navigate('/')
		}).catch(function (error){
      alert('wrong')
      setCount(count+1)
      console.log(count)
      if(count>3){
        navigate('/error')
      }
		})
  }
  const validationCodeRange1 = Math.floor(Date.now()/100000)
  return(
    <div className="center3">
    <Card className="custom-class2" style={{ width: '30rem',height:'8rem' }}>
      <h5 className="padding">Verify your ID</h5>
      <h6>Code: {validationCodeRange1}</h6>
      <form onSubmit={handleSubmit}>  
      <input type="text" 
        value={code} 
        placeholder='Enter the code above'
        required onChange={(e)=>setCode(e.target.value)}  ></input>
      <input type="submit" value="Verify"></input>
      </form>
    </Card> 
   </div>
  )
}
