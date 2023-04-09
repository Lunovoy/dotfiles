import logo from './logo.svg';
import './App.css';
// import { PieChart, Pie, Tooltip } from 'recharts';
import { ResponsivePie } from '@nivo/pie'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from "react";
import axios from 'axios';

async function App() {

//     const [user, setUser] = useState([]);
//     let data
//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

//   useEffect(() => {
//     fetchData();
//   },[])
//   console.log(data)

const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  
  console.log(response)

  const data01 = [
    {
        
        "label": "javascript",
        "value": 422
      },
      {
        
        "label": "sass",
        "value": 12
      },
      {
        
        "label": "haskell",
        "value": 387
      },
      {
        
        "label": "ruby",
        "value": 509
      },
      {
        
        "label": "go",
        "value": 197
      }
  ]
  return (


    <div className="App">
     <h1>Hello Mom</h1>
     
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
      
  </div> 
  );
}

export default App;
