import React from 'react'
import PropTypes from 'prop-types'
let ResultComponet = ({ value }) => {
	return (<>
		<div className="result">
			<span>{value}</span>
		</div>
	</>)
}
ResultComponet.propTypes = {
	value: PropTypes.string,
}
ResultComponet.defaultProps = {
	value: 10
}


export default ResultComponet;
