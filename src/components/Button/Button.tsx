import React from 'react'
const Button = ({label = 'Button', style = 'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'}) => {
  return (
    <button className={style}>{label}</button>
  )
}

export default Button