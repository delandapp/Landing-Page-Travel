import { Ilustrasi2 } from "../assets/images"

const Service = () => {
  return (
    <div className="flex">
      <img src={Ilustrasi2} className="block w-1/2" />
      <div className="flex flex-col">
        <h1 className="font-palatino font-bold text-3xl w-max font-slate-gray">Apa Yang Kamu Butuhkan ?</h1>
        <p>🚗🌇 Jelajahi kota-kota menakjubkan dan nikmati kehidupan perkotaan dengan rekomendasi perjalanan kami. Temukan tempat-tempat yang akan membuat hati Anda berdebar.</p>
      </div>
    </div>
  )
}

export default Service