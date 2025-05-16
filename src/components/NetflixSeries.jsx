import seriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currEle) => (
        <SeriesCard key={currEle.id} currEle={currEle} />
      ))}
    </ul>
  );
}

export default NetflixSeries;