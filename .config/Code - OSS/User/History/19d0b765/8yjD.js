import logo from './logo.svg';
import './App.css';
// import { PieChart, Pie, Tooltip } from 'recharts';
import { ResponsivePie } from '@nivo/pie'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const data = [
    {
        "id": "javascript",
        "label": "javascript",
        "value": 422,
        "color": "hsl(180, 70%, 50%)"
      },
      {
        "id": "sass",
        "label": "sass",
        "value": 12,
        "color": "hsl(240, 70%, 50%)"
      },
      {
        "id": "haskell",
        "label": "haskell",
        "value": 387,
        "color": "hsl(93, 70%, 50%)"
      },
      {
        "id": "ruby",
        "label": "ruby",
        "value": 509,
        "color": "hsl(273, 70%, 50%)"
      },
      {
        "id": "go",
        "label": "go",
        "value": 197,
        "color": "hsl(63, 70%, 50%)"
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
