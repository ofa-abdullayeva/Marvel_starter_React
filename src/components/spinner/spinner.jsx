import React from 'react'
import spinner from '../../resources/img/spinner-1.gif'
import '../../components/spinner/style.scss'

const Spinner = () => {
  return (
    <div className='spinner'>
        <img  src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner