import React from 'react'
import PropTypes from 'prop-types'
let ButtonComponet= ({type, value, fnActive})  => (<>
		<button className={type} onClick={() => fnActive(value)}>
			<span>{value}</span>
		</button>
	</>)
ButtonComponet.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string,
	fnActive: PropTypes.func.isRequired
  }
  ButtonComponet.defaultProps = {
	value: 100,
	type: '',
  }


export default ButtonComponet;
