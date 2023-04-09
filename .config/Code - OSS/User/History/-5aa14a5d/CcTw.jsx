import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
// import ResponsivePie from "nivo/lib/components/charts/pie/ResponsivePie";
import PieChart from "../../components/PieChart";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MyResponsiveRadar from "../../components/RadarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([])

  const location = useLocation()
  const parametrs = new URLSearchParams(location.search);
  const usersId = parametrs.getAll('list_b[]')

   const getData = async () => {
      const response = await axios.post('http://localhost:8000/api/v1/aspirants-filter-id/',{
         id: usersId
      })
      const users = response.data
      return users
   }

  useEffect( () => {
   const foo = async () => {
     const newData = await getData();
     newData.sort((a, b) => b.score - a.score) 
     setData(newData);
   }
   foo()
 }, [])
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Сравнение кандидатов" subtitle="" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Скачать PDF
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name= {data[0] ? data[0].name : " "}
            score={data[0] ? data[0].score : " "}
            icon={
              <EmojiEventsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name= {data[1] ? data[1].name : " "}
            score={data[1] ? data[1].score : " "}
            icon={
              <LooksTwoIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name= {data[2] ? data[2].name : " "}
            score={data[2] ? data[2].score : " "}
            icon={
              <Looks3Icon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name= {data[3] ? data[3].name : " "}
            score={data[3] ? data[3].score : " "}
            icon={
              <Looks4Icon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Столбчатая диаграмма
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          <BarChart isDashboard={true} users={data} />
                       
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Список выбранных кандидатов
            </Typography>
          </Box>
          {data.map((val, i) => (
            <Box
              key={`${val.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {val.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {val.email}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}></Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {val.score}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Круговая диаграмма
          </Typography>
          
            <Box height="500px" mt="-20px">
          <PieChart isDashboard={true} users={data}/>          
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Радарная диаграмма
          </Typography>
          <Box height="500px" mt="-20px">
          <MyResponsiveRadar data={data} />          
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
