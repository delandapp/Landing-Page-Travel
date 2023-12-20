import { popularDestinasi } from "../constants"
import CardPopular from "../components/CardPopular"
const PopularDestinasi = () => {
  return (
    <div className="flex w-full flex-col max-md:items-center">
      <h1 className="font-palatino font-bold text-3xl w-max">Popular Destinasi</h1>
      <p className="font-slate-gray max-md:text-center"> Siapkan kamera Anda dan buat kenangan indah di setiap langkah perjalanan.</p>
      <div className="flex w-full justify-evenly pt-10 max-md:flex-col max-md:gap-4">
        {popularDestinasi.map((destinasi, index) => (
          <CardPopular key={index} {...destinasi} />
        ))}
      </div>
    </div>
  )
}

export default PopularDestinasi