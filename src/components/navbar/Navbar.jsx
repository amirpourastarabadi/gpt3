import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"
import NavbarLinks from "../../components/navbar_links/NavbarLinks"
import NavbarSigns from "../../components/navbar_signs/NavbarSigns"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <NavbarLinks />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <NavbarSigns />
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <NavbarLinks />
            </div>

            <div className="gpt3__navbar-menu_container-links-sign">
              <NavbarSigns />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
