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

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const getData = async () => {
    const api_url = await axios.get(`http://localhost:8000/api/v1/aspirants/?format=json`);
    const data = api_url.data;    
    return data
  }

  const [data, setData] = useState([])


  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "first_name",
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
      field: "achievenments",
      headerName: "Достижения",
      flex: 1,
    },
    {
      field: "hobbies",
      headerName: "Хобби",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Эл. почта",
      flex: 1,
      // renderCell: ({ row: { access } }) => {
      //   return (
      //     <Box
      //       width="60%"
      //       m="0 auto"
      //       p="5px"
      //       display="flex"
      //       justifyContent="center"
      //       backgroundColor={
      //         access === "admin"
      //           ? colors.greenAccent[600]
      //           : access === "manager"
      //           ? colors.greenAccent[700]
      //           : colors.greenAccent[700]
      //       }
      //       borderRadius="4px"
      //     >
      //       {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      //       {access === "manager" && <SecurityOutlinedIcon />}
      //       {access === "user" && <LockOpenOutlinedIcon />}
      //       <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
      //         {access}
      //       </Typography>
      //     </Box>
      //   );
      // },
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
      <Header title="Кандидаты" subtitle="Выберите кандидатов для сравнения" />
      <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
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
