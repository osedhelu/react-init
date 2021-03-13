import React, {useState} from 'react'
import PropTypes from 'prop-types'

let CounterApp = ({value})  => {
const [Counter, setCounter] = useState(value) 

let add = (e) => setCounter(Counter + 1);
let remove = () => setCounter(Counter - 1);
let reset = () => setCounter(value)

return (<>
	<h1>primera seccion</h1>
	<h2> { Counter } </h2>
	<button  className="btn btn-success" onClick={ add } >+1</button>
	<button className="btn btn-danger" onClick={ reset } >Reset</button>
	<button className="btn btn-primary" onClick={ remove } >-1</button>
</>)
}

CounterApp.propTypes = {
	value: PropTypes.number,
}
CounterApp.defaultProps = {
	value: 100
}


export default CounterApp;
