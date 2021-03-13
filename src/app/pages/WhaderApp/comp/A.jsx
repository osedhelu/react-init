import React from 'react'
import PropTypes from 'prop-types'
let Aacomponet= ({value})  => {


	return (<>
		<p>Hola </p>
	</>)
}
Aacomponet.propTypes = {
	value: PropTypes.number,
  }
  Aacomponet.defaultProps = {
	value: 100
  }


export default Aacomponet;
