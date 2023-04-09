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



function SuperCard(props) {

    return (
        <div className="container">
            <div className="left">
                <PersonBoard pers_data={props.dash_data[0]} />
            </div>
            <div className="right">
                <div>
                    <RateList rate_data={props.dash_data}/>
                </div>
            </div>
        </div>
    )
}

export default SuperCard;