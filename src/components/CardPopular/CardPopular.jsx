const CardPopular = ({imgURL, lokasi, label, hari, price}) => {
  return (
    <div className="flex flex-col bg-slate-100 rounded-lg shadow-md font-palanquin pb-5 w-1/5">
        <img src={imgURL} alt="" className="rounded-t-lg block w-full object-fit"/>
        <div className="px-6 d">
            <p className="text-slate-gray font-semibold text-sm">{lokasi}</p>
            <h3 className="font-bold text-l">{label}</h3>
            <p className="text-slate-gray font-semibold text-sm">{hari != "" ? `${hari} hari` : ''}</p>
            <p className="text-slate-gray font-bold text-l mt-4">{price}</p>
        </div>
    </div>
  )
}

export default CardPopular