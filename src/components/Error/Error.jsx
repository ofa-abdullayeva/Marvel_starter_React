import React from 'react'
import error from '../../resources/img/error.gif'
import '../../components/Error/error.scss'

const Error = () => {
    return (
        <div className='error'>
            <img src={error} alt="error" />
        </div>
    )
}

export default Error