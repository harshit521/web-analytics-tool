
const Card = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.url} alt="img" className="card-img"></img>
                <p className="card-content">{props.text}</p>
            </div>
        </>
    )
}

export default Card