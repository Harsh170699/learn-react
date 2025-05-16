export const SeriesCard = (props) => {
    return (
        <li>
            <div>
                <img src={props.currEle.img_url} alt={props.currEle.name} width="20%" height="20%" />
            </div>
            <h2>Name: {props.currEle.name}</h2>
            <h3>Rating: {props.currEle.rating}</h3>
            <p>Summary: {props.currEle.description}</p>
            <p>Genre: {props.currEle.genre}</p>
            <p>Cast: {props.currEle.cast}</p>
            <a href={props.currEle.watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    )
}