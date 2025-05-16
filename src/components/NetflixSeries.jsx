import seriesData from '../api/seriesData.json';

const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((currEle) => {
          return (
            <li key={currEle.id}>
              <div>
                <img src={currEle.img_url} alt={currEle.name} width="20%" height="20%" />
              </div>
              <h2>Name: {currEle.name}</h2>
              <h3>Rating: {currEle.rating}</h3>
              <p>Summary: {currEle.description}</p>
              <p>Genre: {currEle.genre}</p>
              <p>Cast: {currEle.cast}</p>
              <a href={currEle.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </li>
          )
        })
      }
    </ul>
  );
}

export default NetflixSeries;