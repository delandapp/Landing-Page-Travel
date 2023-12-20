import React from 'react'

const CardService = ({imgURL, label, judul}) => {
  return (
    <div className="flex p-7 rounded-md font-montserrat items-center gap-4 hover:bg-slate-50 hover:shadow-lg hover:cursor-pointer">
        <img src={imgURL} alt="" className='block w-[30px] h-[30px]'/>
        <div className="flex flex-col">
          <h1 className='font-bold'>{judul}</h1>
          <p className='text-slate-500 max-md:text-sm'>{label}</p>
        </div>
    </div>
  )
}

export default CardService