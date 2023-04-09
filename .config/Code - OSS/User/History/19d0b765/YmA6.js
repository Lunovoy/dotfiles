import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Tooltip } from 'recharts';

function App() {
  const data = [
    {
      
      "label": "rust",
      "value": 356
    },
    {
      
      "label": "c",
      "value": 578
      
    },
    {
      
      "label": "make",
      "value": 3
    },
    {
      
      "label": "css",
      "value": 354
    },
    {
      
      "label": "elixir",
      "value": 139
    }
  ]
  return (


    <div className="App">
     <h1>Hello Mom</h1>
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
    
    </div>
  );
}

export default App;
