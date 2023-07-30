import { Fragment, useState } from 'react';

import ShipSummary from './ShipSummary';
import Ships from './Ships';

const ShipsWrapper = () => {
  const [counter, setCounter] = useState(0);

  const refreshHandler = () => {
    setCounter((prev) => {
        return prev+1;
    })
  }

  return (
    <Fragment>
      <ShipSummary refreshHandler={refreshHandler}/>
      <Ships counter={counter}/>
    </Fragment>
  );
};

export default ShipsWrapper;
