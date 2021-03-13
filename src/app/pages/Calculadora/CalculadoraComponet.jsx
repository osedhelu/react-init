import React, { useState } from 'react'
import ResultComponet from '../../InitComponet/calculadoraComponet/Result'
import NumberComponet from '../../InitComponet/calculadoraComponet/numbers'
import FunctionComponet from '../../InitComponet/calculadoraComponet/function'
import OperactionsComponet from '../../InitComponet/calculadoraComponet/OperationsMat'
import words from 'lodash.words';
let CalculadoraComponet = () => {
	
	const [result, setResult] = useState('');
	const items = words(result, /[^-^+^*^/]+/g);
	console.log(items);
	let getNumero = num => setResult(`${result}${num}`);
	let selectOpe = signo => setResult(`${result}${signo}` )
	let SelectEqual = signo => {
		if(result.length -1 >= 0){
			// let aa = /[^0-9]/g;
			// let ret = str.match(aa)
			// var cadena = "hello world!";
			// var prueba = /^[0-9]/.test(result[result.length -1]);
			console.log(result.substring(0, result.length -1));
		}else {
			console.log('__B');
		}
	}
	let onDelete = (e) => {
		if(result.length !== 0) {
			let newStack = result.substring(0, result.length -1);
			setResult(newStack)
		}else {
			console.log('home entro');
		}
	};
	let onClear = (e) => setResult('')
	
	
	return (<>
		<div className="col-10 align-self-center text-center">
			<h2>Calculadora</h2>
			<div className="card shadow">
				<div className="card-body react-calculator">
					<ResultComponet value={items[items.length -1]?items[items.length -1]:''}/>
					<NumberComponet fnPrimary={getNumero} />
					
					<FunctionComponet onClear={onClear} onDelete={onDelete} />
					<OperactionsComponet fnOperaton={selectOpe} fnEqual={SelectEqual}/>
				</div>
			</div>
		</div>
	</>)
}


export default CalculadoraComponet;
