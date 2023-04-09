import logo from './logo.svg';
import './App.css';
import { ResponsivePie } from '@nivo/pie'

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
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
    
    </div>
  );
}

export default App;
