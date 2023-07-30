import React,  { Fragment, useEffect, useState } from 'react'
import Card from '../UI/Card'
import Ship from './Ship'
import classes from './Ships.module.css'

const Ships = (props) => {
    const {counter} = props
    const [ships, setShips] = useState([]);
    const [content, setContent] = useState("Loading...");
    const [maxFilms, setMaxFilms] = useState(0);
    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
           .then((response) => response.json())
           .then((data) => {
              console.log('data ', data)
             //FILTERING DATA
             const filteredData = data.results.filter((ship) => ship.crew < 10 )
             .sort((a, b) => (a.crew > b.crew) ? 1 : -1);
             setShips(filteredData);
             if(filteredData.length <= 0)
                setContent('No starships with a crew size less than 10 found. Please try again');
            else
            {
                //FILTERING to find max films
                const ids = filteredData.map(object => {
                    return object.films.length;
                  });
                  const max = Math.max(...ids);
                  setMaxFilms(max);
            }
           })
           .catch((err) => {
              console.log(err.message);
              setContent('Internal server error. Please try again');
           });
     }, [counter]);

  return (
    <Fragment>
    {ships.length > 0 && <section className={classes.ships}>
      <Card>
        <ul>
           {ships.map((ship) => (
                <Ship
                  key={ship.name}
                  name={ship.name}
                  model={ship.model}
                  filmsCount={ship.films?.length}
                  crew={ship.crew}
                  maxFilms={maxFilms}
                />
            ))
            }
        </ul>
      </Card>
    </section>}
    {ships.length <= 0 && content}
    </Fragment>
  );
};

export default Ships;
