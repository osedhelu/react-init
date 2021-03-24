import React from 'react'
import HeaderComponet from './shared/header/headerComponet'
import PegasIndex from './pages'
import SidebarContainer from './shared/sidebarContainer/sidebarContainer'

let InitComponet = () =>(<>
		
		<HeaderComponet />

		<div className="container mt-0">
			<div className="row justify-content-center h-100">
				<SidebarContainer />
				<PegasIndex />
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
