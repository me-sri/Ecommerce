import React from 'react'

const Button = ({onClick,isActive}) => {
  return (
    <div>
      <button className='btn btn-info' onClick={onClick} >



{
    isActive ? "bet anpothwr" :" getuser"
}

      </button>
    </div>
  )
}

export default Button
