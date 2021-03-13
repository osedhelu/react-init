import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponet from './ButtonComponet'
let OperactionsComponet = ({ value, fnOperaton, fnEqual }) => {
		let getSecundary = singno => {
			if(singno !== '=') {
				fnOperaton(singno)
			}else {
				fnEqual(singno)
			}
		}
	return (<>
		<div className="math-operations">
			<ButtonComponet value="+" fnActive={getSecundary} />
			<ButtonComponet value="*" fnActive={getSecundary} />
			<ButtonComponet value="/" fnActive={getSecundary} />
			<ButtonComponet value="-" fnActive={getSecundary} />
			<ButtonComponet value="=" fnActive={getSecundary} />


		</div>
	</>)
}
OperactionsComponet.propTypes = {
	value: PropTypes.number,
	fnOperaton: PropTypes.func,
	fnEqual: PropTypes.func
}
OperactionsComponet.defaultProps = {
	value: 100
}


export default OperactionsComponet;
