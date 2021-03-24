import React from 'react'
import PropTypes from 'prop-types'
let PegasIndex= ({value})  => {
	return (<>
		<div className="col-10 pt-3">
			<div className="card">
				<div className="card-body">
					<main className="react-calculator">
						<div className="result"></div>
						<div className="numbers">
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button>4</button>
							<button>5</button>
							<button>6</button>
							<button>7</button>
							<button>8</button>
							<button>9</button>
							<button>0</button>
						</div>
						<div className="functions">
							<button>clear</button>
						</div>
					</main>
				</div>
			</div>
		</div>
	</>)
}
PegasIndex.propTypes = {
	value: PropTypes.number,
  }
  PegasIndex.defaultProps = {
	value: 100
  }

export default PegasIndex;