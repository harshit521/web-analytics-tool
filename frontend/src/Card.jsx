

const Card = ({url,text,buttontext}) => {
    return(
        <>
            <div className="card">
                <img src={url} alt="img" className="card-img"></img>
                <p className="card-content">{text}</p>
                <button>{buttontext}</button>
            </div>
        </>
    )
}

export default Card