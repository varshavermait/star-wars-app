import classes from './Ship.module.css';
import image from './../../assets/winnercup.jpg';

const Ship = (props) => {
  return (
    <li className={classes.ship}>
      <div>
        <h3>{props.name}</h3>
        <div>Model</div>
        <div className={classes.description}>{props.model}</div>
      </div>
      <div>
      {props.filmsCount === props.maxFilms && <img src={image} className={classes.image} alt="logo" />}
      </div>
      <div className='={classes.films}'>
        <h4>Number of films</h4>
        <h4>{props.filmsCount}</h4>
      </div>
    </li>
  );
};

export default Ship;
