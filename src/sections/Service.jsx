import { Ilustrasi2 } from "../assets/images"
import CardService from "../components/CardService"
import { servicePopuler } from "../constants"

const Service = () => {
  return (
    <div className="flex justify-center gap-12 max-md:flex-col-reverse">
      <img src={Ilustrasi2} className="block lg:w-1/2" />
      <div className="flex flex-col gap-4">
        <h1 className="font-palatino font-bold text-3xl w-max font-slate-gray max-md:text-2xl max-md:text-center">Apa Yang Kamu Butuhkan ?</h1>
        <p className="max-md:text-center">🚗🌇 Jelajahi kota-kota menakjubkan dan nikmati kehidupan perkotaan dengan rekomendasi perjalanan kami. Temukan tempat-tempat yang akan membuat hati Anda berdebar.</p>
        <div className="flex flex-col lg:mt-10">
          {servicePopuler.map((service, index) => (
            <CardService key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service