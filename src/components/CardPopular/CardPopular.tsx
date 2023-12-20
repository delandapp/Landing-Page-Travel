import React from 'react'

const CardPopular = ({imgURL, lokasi, label, hari, price}) => {
  return (
    <div className="flex flex-col bg-[#F3F6F6] rounded-lg shadow-md font-palanquin pb-5 lg:w-1/5">
        <img src={imgURL} alt="" className="rounded-t-lg block w-full object-fit"/>
        <div className="px-6 d">
            <p className="text-slate-gray font-semibold text-sm">{lokasi}</p>
            <h3 className="font-bold text-l">{label}</h3>
            <p className="text-slate-gray font-semibold text-sm">{hari != "" ? `${hari} hari` : ''}</p>
            <p className="text-[#42A8C3] font-bold text-l mt-4">{price}</p>
        </div>
    </div>
  )
}

export default CardPopular