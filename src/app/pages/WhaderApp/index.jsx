import React from 'react'
import PropTypes from 'prop-types'
import Aacomponet from './comp/A'
let WhaderApp= ({value})  => {
	return (<>
		<div className="col-10 align-self-center text-center">
			<h1>Weather App</h1>
					<Aacomponet/>
			<div className="container-fluid">
				<div className="row ">
				</div>
			</div>
		</div>
	</>)
}
WhaderApp.propTypes = {
	value: PropTypes.number,
  }
  WhaderApp.defaultProps = {
	value: 100
  }


export default WhaderApp;
