import seriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';

const NetflixSeries = () => {
  return (
    <ul className='grid grid-three--cols'>
      {seriesData.map((currEle) => (
        <SeriesCard key={currEle.id} data={currEle} />
      ))}
    </ul>
  );
}

export default NetflixSeries;