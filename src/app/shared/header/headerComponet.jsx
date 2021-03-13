import React from 'react'
import PropTypes from 'prop-types'
let HeaderComponet = ({ value }) => {
	return (<>
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<div className="container">
				<button className="navbar-toggler">x</button>
				<span className="navbar-toggler-icon"></span>
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<i className="nav-link" target="_blank"
								rel="noopener noreferrer">Link</i>
						</li>
						<li className="nav-item">
							<i className="nav-link" target="_blank"
								rel="noopener noreferrer">Link</i>
						</li>
						<li className="nav-item">
							<i className="nav-link" target="_blank"
								rel="noopener noreferrer">Link</i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</>)
}
HeaderComponet.propTypes = {
	value: PropTypes.number,
}
HeaderComponet.defaultProps = {
	value: 100
}


export default HeaderComponet;
