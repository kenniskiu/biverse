import React,{useState} from "react"
import Lands from "./Lands";
import NavBar from "./NavBar";

const axios = require('axios');
export function BuyLand(){
    const [code,setCode] = useState('');
    const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(code)
    axios({
		method: 'post',
	    url:'http://localhost:3001/verification/id',
		data: { 
        code : code
      }
		}).then((response) => {
      console.log(response);
      return response
		}).catch(function (error){
			console.log('error axios');
		})
  }
    return(
        <div className='backgroundColor'>       
        <NavBar></NavBar> 
        <div style={{ borderTop: "1px solid #5a5782 ", marginLeft: 20, marginRight: 20 }}></div>
            <div className="header1">
                <h1 className="white"><b>Find Land For Sale</b></h1>
                <h5 className="subtitleColor">Claim your Land in BiVerse World!</h5>
            </div>
            <div className="center">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={code} 
                placeholder='Enter a City or Country'
                required onChange={(e)=>setCode(e.target.value)}
                className="input"
                ></input>
                <input type="submit" value="Search" className="input1"/>
            </form>
            </div>
            <div className="header1">
              <h5 className="customColor">Showcase Properties</h5>
            </div>
            <div style={{ 
              borderTop: "5px solid #5a5782 ", 
              borderBottom:"10px",
              borderRadius:"5px",
              marginLeft: 530, 
              marginRight: 530
              }}
              className="paddingBottom"></div>
              <Lands></Lands>
        </div>
    )
  }

