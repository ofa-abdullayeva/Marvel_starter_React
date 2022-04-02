import React from 'react'
import spinner from '../../resources/img/loading-36.gif'
import '../../components/spinner/style.scss'

const Spinner = () => {
  return (
    <div>
        <img className='spinner' src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner