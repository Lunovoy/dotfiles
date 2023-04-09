import { Box, Typography, useTheme, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from 'react-router-dom'
import Header from "../../components/Header";
import React from "preact/compat";
import axios from "axios";
import { useEffect, useState } from "react";
import Combobox from "../../components/Combobox";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate()

  const [selectionModel, setSelectionModel] = useState([]);

  const [tags, setTags] = useState([])

  // const getFilteredData = async () => {
  //   const stringTags = tags.map(item => `${item}`)
  //   const otvet = await axios.post('http://localhost:8000/api/v1/aspirants-filter-technologies/',{ 
  //     technologies: stringTags
  //   });
  //   const newData = otvet.data;
  //   setData(newData)
  // }

  const goDashboard = () => {
   const url = `list_id=${selectionModel.reduce((item, val) => val = val + `&list_id=${item}`)}`
   navigate(`dashboard?${url}`)
  }

  // candidatesID = []
  // technologies = []

  // const sendData = async () => {
  //   const postData = await axios.post('http://localhost:8000/api/v1/aspirants-filter-id/', {
  //     id: candidateID 
  //   })
  // }
  
  const [data, setData] = useState([])
  
  const getData = async () => {
    const api_url = await axios.get(`http://localhost:8000/api/companies/?format=json`);
    const data = api_url.data;
    console.log(data)
    return data
  }



  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Название компании",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "supplier_inn",
      headerName: "ИНН",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "supplier_kpp",
      headerName: "КПП",
      type: "number",
      flex: 1,
    },
    {
      field: "okved",
      headerName: "ОКВЭД",
      flex: 1,
    },
  ];
  useEffect( () => {
    const foo = async () => {
      const newData = await getData();
      setData(newData);
    }
    foo()
  }, [])
    return (
    <Box m="20px">
      <Header title="Кандидаты" subtitle="Выберите поставщика" />
      {/* <Combobox tags={tags} setTags={setTags}> </Combobox> */}
      <Box display="flex" justifyContent="space-between" mt="10px">
              {/* <Button onClick={getFilteredData} type="submit" color="secondary" variant="contained">
                Подтвердить
              </Button> */}
              <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={goDashboard}
          >
            Перейти к дашборду
          </Button>
            </Box>
      
            
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
         checkboxSelection 
         rows={data} 
         columns={columns} 
         selectionModel={selectionModel}
         onSelectionModelChange={newSelectionModel => setSelectionModel(newSelectionModel)}
        />
      </Box>
    </Box>
  );
};


export default Team;
