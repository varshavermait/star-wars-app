import classes from './ShipSummary.module.css';

const ShipSummary = (props) => {
  const clickHandler = props.refreshHandler;
  return (
    <section className={classes.summary}>
      <h2>StarWars</h2>
      <p>
        Sample react project using SWAPI API
      </p>
      <p>
        Results are filtered to starships with a crew size less than 10 and sorted by crew size
      </p>
      <p>
        Starships with most films are given award
      </p>
      <button onClick={clickHandler}>Get StarWars</button>
    </section>
  );
};

export default ShipSummary;
