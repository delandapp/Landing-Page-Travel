import React from 'react'

const ButtonIcon = ({style = 'bg-black hover:bg-slate-700 text-white font-bold py-1 px-4 rounded flex items-center gap-3 max-md:text-sm max-md:px-2', label = 'Button', icon, desc}) => {
  return (
    <button className={style}><img src={icon} alt="" width={24} height={25}/><div className="flex flex-col"><p className='text-sm font-light'>{label}</p>{desc}</div></button>
  )
}

export default ButtonIcon