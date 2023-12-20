import ButtonIcon from "../components/ButtonIcon"
import { Ilustasi } from "../assets/images"
import { GooglePlayLogo, AppleLogo } from "../assets/images"

const Hero = () => {
  return (
    <div className="flex w-full justify-between max-md:flex-col">
      <div className="flex flex-col lg:w-2/3 justify-center lg:px-20 max-md:px-5 gap-6">
        <h1 className="font-palatino font-bold text-4xl max-md:text-[40px] max-md:leading-[50px]">Eksplorasi Tak Terlupakan, Portal <span className="text-coral-red">Perjalanan 🌈 Pilihan</span> Anda </h1>
        <p className="font-palatino text-slate-gray font-semibold">🌊  Liburan santai atau petualangan air, temukan destinasi pantai paling eksotis dan seru untuk mengisi momen-momen istimewa Anda.</p>
        <div className="flex gap-6 max-md:w-full max-md:justify-center lg:mt-5">
          <ButtonIcon label="Download on the" desc={'Google Play'} icon={GooglePlayLogo}/>
          <ButtonIcon label="Download on the" desc={'Google Play'} icon={AppleLogo}/>
        </div>
      </div>
      <img src={Ilustasi} alt="" height={594} width={648} className="max-md:mt-10"/>
    </div>
  )
}

export default Hero