import logo from './logo.svg';
import './App.css';
// import { PieChart, Pie, Tooltip } from 'recharts';
import { ResponsivePie } from '@nivo/pie'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const data = [
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
     <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  </div> 
  );
}

export default App;
