const NetflixSeries = () => {
    const name = "Avengers: Age of Ultron";
    const rating = "5.8";
    let age = 16;
    const summary = "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe";
    const returnGenre = () => {
      const genre = "RomCom";
      return genre;
    };
  
    const canWatch = () => {
      return age >= 18 ? "Watch Now" : "Not Available";
    }
    return (
    <div>
      <div>
        <img src="ageOfUltron.jpg" alt='ageOfUltron.jpg' width="20%" height="20%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {10 + 3.2}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      <button>{canWatch()}</button>
    </div>
    );
  }

export default NetflixSeries;

export const Header = () => {
  return <p>Copyright @header</p>
}

export const Footer = () => {
  return <p>Copyright @footer</p>
}