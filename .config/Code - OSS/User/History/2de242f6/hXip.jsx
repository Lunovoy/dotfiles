import { Box, Typography, useTheme, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import React from "preact/compat";
import axios from "axios";
import { useEffect, useState } from "react";
import Combobox from "../../components/Combobox";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tags, setTags] = useState([])

  const getFilteredData = async () => {
    const otvet = await axios.post('http://localhost:8000/api/v1/aspirants-filter-technologies/', tags);
    const newData = otvet.data;
    console.log(newData)
  }



  // candidatesID = []
  // technologies = []

  // const sendData = async () => {
  //   const postData = await axios.post('http://localhost:8000/api/v1/aspirants-filter-id/', {
  //     id: candidateID 
  //   })
  // }

  // const filterCandidate = async () => {
  //   const newCandidates = await axios.post('http://localhost:8000/api/v1/aspirants-filter-technologies/', {
  //     id: 
  //   })
  // }
  

  const [data, setData] = useState([])
  
  const getData = async () => {
    const api_url = await axios.get(`http://localhost:8000/api/v1/aspirants/?format=json`);
    const data = api_url.data;    
    return data
  }



  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "ФИО",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Возраст",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "technologies",
      headerName: "Стэк технологий",
      flex: 1,
    },
    {
      field: "gpa",
      headerName: "Ср. балл диплома",
      flex: 1,
    },
    {
      field: "achievenments",
      headerName: "Достижения",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Эл. почта",
      flex: 1,
    },
  ];
  useEffect( () => {
    const foo2 = async () => {
      const newData = await getFilteredData();
      setTags(newData);
    }
    const foo = async () => {
      const newData = await getData();
      setData(newData);
    }
    foo()
    foo2()
  }, [])
    return (
    <Box m="20px">
      <Header title="Кандидаты" subtitle="Выберите кандидатов для сравнения" />
      <Combobox tags={tags} setTags={setTags}> </Combobox>
      <Box display="flex" justifyContent="space-between" mt="10px">
              <Button onClick={getFilteredData} type="submit" color="secondary" variant="contained">
                Подтвердить
              </Button>
              <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Перейти к сравнению
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
        <DataGrid checkboxSelection rows={data} columns={columns} />
      </Box>
    </Box>
  );
};


export default Team;
