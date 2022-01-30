import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Line} from "react-chartjs-2"
import 'chart.js/auto';

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
  datasets: [{
    label:"Price",
    data: [12, 5,7,5,2,1,6,5,8,12,6,10],
    borderColor: 'rgb(163, 159, 222)', 
    fill: {
      target: 'origin',
      above: 'rgba(64,58,130,0.6)',   // Area will be red above the origin
    },
    borderWidth: 2,
    tension:'0.4',
    pointHoverBorderWidth:'1',
    borderJoinStyle:'round',
    pointBorderColor:'#fff',
    pointHoverRadius: '5',
    pointRadius:'0',
    },
  ],
}
const option ={
  scales: {
    x: {
      grid: {
        display:false
      },
      ticks:{
        font:{
          size:12,
        }
      },
  },
  y: {
    ticks:{
      font:{
        size:12,
        color:"#fff"
      }
    }
  },
}
}
const BarChart = () =>{
  return <div className="white">
    <Line
      data={data}
      options={option}
      />
  </div>
}
export default BarChart