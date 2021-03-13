import React from 'react'
import PropTypes from 'prop-types'
let SidebarContainer = ({ value }) => {
	//TODO: esta es la parte de la estructutacion de la 
	return (<>
		<div className="col-sm-2">
			<h2>About Me</h2>
			<h5>Photo of me:</h5>
			<div className="fakeimg">Estate default</div>
			<ul className="nav nav-pills flex-column">
				<li className="nav-item">
					<i className="nav-link active"  href="#">Active</i>
				</li>
				<li className="nav-item">
					<i className="nav-link" href="#">Link</i>
				</li>
				<li className="nav-item">
					<i className="nav-link" href="#">Link</i>
				</li>
				<li className="nav-item">
					<i className="nav-link disabled" href="#">Disabled</i>
				</li>
			</ul>
			<hr className="d-sm-none" />
		</div>


	</>)
}
SidebarContainer.propTypes = {
	value: PropTypes.number,
}
SidebarContainer.defaultProps = {
	value: 100
}


export default SidebarContainer;
