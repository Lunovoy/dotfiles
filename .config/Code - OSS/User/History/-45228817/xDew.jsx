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


function PersonBoard(props) {


    return (
        <div>
            <div className="name-person">
                <p>{props.pers_data.name}</p>
            </div>
            <div>
                <img src={"https://cdn.trinixy.ru/pics6/20220607/228182_10_trinixy_ru.jpg"} className="avatar"/>
                
            </div>
            <div className = "age-person">
                <p>{props.pers_data.age + ' y.o.'} </p>
            </div>
            <div className="card-conteiner">
                {props.pers_data.technologies.map((tech, i) => (
                    <div className="card">{tech}</div>
                ))}
            </div>
        </div>
    )
}

function PersonCard(props) {

    return (
        <div>
            <img className="top-img" src={"https://cdn.trinixy.ru/pics6/20220607/228182_10_trinixy_ru.jpg"}/>
            <div className="rang">{props.person.name}</div>

            <div className="positions">{props.pos}</div>
        
            </div>
    )
}

function RateList(props) {

    return (
        <div className="personCard-container">
            <div className="top">Рейтинг</div>
            <br/>
            <PersonCard person={props.rate_data[1]} pos={2}/>
            <PersonCard person={props.rate_data[2]} pos={3}/>
            <PersonCard person={props.rate_data[3]} pos={4}/>
            <PersonCard person={props.rate_data[4]} pos={5}/>
        </div>
    )
}



const Supercard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div className="container">
            <div className="left">
                <PersonBoard pers_data={data[0]} />
            </div>
            <div className="right">
                <div>
                    <RateList rate_data={data}/>
                </div>
            </div>
        </div>
    )
}

export default PersonBoard;

const data = [
    {
        id: 1,
        name: "Ефремова София",
        age: 30,
        technologies: [
            'C#',
            'ASP.NET',
            'JavaScript'
        ]
    },

    {
        id: 2,
        name: "Кузнецов Марк",
        age: 30,
        technologies: [
            'C#',
            'Python',
            'JavaScript',
            'React.js'
        ]
    },

    {
        id: 3,
        name: "Трошина Александра",
        age: 30,
        technologies: [
            'C++',
            'ASP.NET',
            'КАШТАН',
            'Java'
        ]
    },

    {
        id: 4,
        name: "Трофимов Никита",
        age: 30,
        technologies: [
            'C#',
            'Django',
            'JavaScript',
            'React.js'
        ]
    },
    {
        id: 5,
        name: "Виталий Ферару",
        age: 30,
        technologies: [
            'Сержант',
            'Цыган',
            'Друг Лёхи',
            'Дрочер'
        ]
    },
];