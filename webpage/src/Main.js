import React from 'react';
import Cards from './Cards.js'
import NavBar from './NavBar.js';

export default function Main() {
  return (
      <div className='backgroundColor'>   
      <NavBar></NavBar>     
      <div style={{ borderTop: "1px solid #5a5782 ", marginLeft: 20, marginRight: 20 }}></div>
        <div className='header'>
        <h5 className='headerColor'>Get Your Biverse Land</h5>
        <h6 className='verse'>Claim Biverse Land using $Biverse Token</h6>
      </div>
      <div className="center">
        <Cards></Cards>
       </div>
      </div>
  )
}
