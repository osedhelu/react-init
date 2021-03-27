import React from "react";
import PropTypes from "prop-types";
import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp";

let PegasIndex = ({ value = 10 }) => {
  return (
    <>
      <div className="col-10 pt-3">
        <div className="card">
          <div className="card-body">
			  <CounterApp value={value}/>
        <PrimeraApp saludos="aa"/>
		  </div>
        </div>
      </div>
    </>
  );
};
PegasIndex.propTypes = {
  value: PropTypes.number,
};
PegasIndex.defaultProps = {
  value: 100,
};

export default PegasIndex;
