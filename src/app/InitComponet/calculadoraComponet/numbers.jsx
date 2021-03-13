import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponet from './ButtonComponet'
let numNodos = [1,2,3,4,5,6,7,8,9,0]


let NumberComponet = ({ fnPrimary }) => {
	let fnSecundary = num => fnPrimary(num);

	let getNodos = (fn) => {
		return numNodos.map(resp => <ButtonComponet 
		key={resp}  
		value={resp.toString()} 
		fnActive={fn}/>)
	}

	return (<>
		<div className="numbers">
			{getNodos(fnSecundary)}
		</div>
	</>)
}
NumberComponet.propTypes = {
	value: PropTypes.number,
	fnPrimary: PropTypes.func
}
NumberComponet.defaultProps = {
	value: 100
}


export default NumberComponet;
