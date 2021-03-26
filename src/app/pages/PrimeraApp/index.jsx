import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludos, subtitulo}) => {
    return (
        <>
            <h1>{ saludos }!!!</h1>
            <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired,
    subtitulo: PropTypes.string

}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp
