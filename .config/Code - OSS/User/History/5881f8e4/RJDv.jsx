import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Combobox() {

    const getData = async () => {
        const api_url = await axios.get(`http://localhost:8000/api/v1/technologies/?format=json`);
        const data = api_url.data;    
        return data
      }
    
      const [data, setData] = useState([])

      useEffect( () => {
        const foo = async () => {
          const newData = await getData();
          setData(newData);
        }
        foo()
      }, [])

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      
      <Autocomplete
        multiple
        id="tags-outlined"
        options={data}
        getOptionLabel={(option) => option.name}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            // label="filterSelectedOptions"
            placeholder="Технологии"
          />
        )}
      />
      
    </Stack>
  );
}
