import { LogoText } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { Button } from "../components/Button"

const Nav = () => {
  return (
    <div className="flex w-full justify-between px-10 py-5 max-md:px-5">
        <img src={LogoText} alt="" width={150} height={150}/>
        <div className="flex w-[70%] justify-between items-center max-md:hidden">
          <ul className="flex gap-10 font-montserrat font-semibold items-center">
            {navLinks.map((link) => (
              <li key={link}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
          <Button label={'Sign Up'} />
        </div>
        <img src={hamburger} alt="" height={24} width={24} className="hidden max-md:inline-block"/>
    </div>
  )
}

export default Nav