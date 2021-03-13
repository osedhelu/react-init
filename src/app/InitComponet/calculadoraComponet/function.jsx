import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponet from './ButtonComponet'
let FunctionComponet = ({ onClear, onDelete }) => {
	let fnClear = (e) => onClear(e) 
	let fnDelete = (e) => onDelete(e) 
	return (<>
		<div className="functions">
		<ButtonComponet value="&larr;" type="h4"  fnActive={fnDelete}  />
		<ButtonComponet value="Clear" type="h6" fnActive={fnClear}  />
		</div>
	</>)
}
FunctionComponet.propTypes = {
	onClear: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
}
FunctionComponet.defaultProps = {
	// value: 100
}


export default FunctionComponet;
