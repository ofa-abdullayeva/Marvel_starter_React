import React from 'react'
import error2 from '../../resources/img/error2.gif'
import '../../components/Error/error.scss'

const Error = () => {
    return (
        <div className='error'>
            <img src={error2} alt="error" />
        </div>
    )
}

export default Error