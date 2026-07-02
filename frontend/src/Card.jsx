

const Card = ({url,text,buttontext}) => {
    if (buttontext){return(
        <>
            <div className="card">
                <img src={url} alt="img" className="card-img"></img>
                <p className="card-content">{text}</p>
                <button className="buttons">{buttontext}</button>
            </div>
        </>
    )
}
else{
    return(
        <>
            <div className="card">
                <img src={url} alt="img" className="card-img"></img>
                <p className="card-content">{text}</p>
            </div>
        </>
    )
}
}

export default Card