import React from 'react'
import WhaderApp from '../pages/WhaderApp';
// import PropTypes from 'prop-types'
import HeaderComponet from '../shared/header/headerComponet';
import SidebarContainer from '../shared/sidebarContainer/sidebarContainer';
import CalculadoraComponet from '../pages/Calculadora/CalculadoraComponet';
let InitComponet = () =>(<>
		{/* <div className="jumbotron text-center mt-0 mb-0">
			<h1>Mis trabajos en Reactjs</h1>
			<p>osedhelu</p>
		</div> */}
		<HeaderComponet />

		<div className="container mt-0">
			<div className="row justify-content-center h-100">
				<SidebarContainer />
				<WhaderApp />
				<CalculadoraComponet />
			</div>
		</div>

	</>)

//arroy function 

let materials = [
	'ma',
	'me',
	'mi',
	'mo',
	'mu'
]

let pr = () => {
	return materials.length
}

console.log(pr());
export default InitComponet;
