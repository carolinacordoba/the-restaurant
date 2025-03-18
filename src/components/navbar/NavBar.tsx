import { VscMenu } from "react-icons/vsc"
import "../../styles/navbar.scss"
import NavLinks from "./NavLinks"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 500px)" })
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false)

    const disableScroll = (): void => {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0)
        window.addEventListener("scroll", preventScroll);
    };

    const enableScroll = (): void => {
        document.body.style.overflow = "";
        window.removeEventListener("scroll", preventScroll);
    };

    const preventScroll = (e: Event): void => {
        e.preventDefault();
    };

    if (isOpen) {
        disableScroll();
    } else {
        enableScroll();
    }

    const handleMenuOpening = () => {
        setIsClosing(false);
        setIsOpen(true);
    }

    return (
        <nav className="nav">
            <div className="nav__top">
                <NavLink to={"/"}>
                    <img src="/logga-camatheo.png" alt="Logo" className="nav__top__img" />
                </NavLink>

                {isMobile && <VscMenu className="nav__top__menu-icon" onClick={handleMenuOpening} />}
            </div>
            {isMobile && <div className="nav__line"></div>}
            {
                isMobile ? (
                    <NavLinks
                        classname={"mobile"}
                        isMobile={true}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        setIsClosing={setIsClosing}
                        isClosing={isClosing}
                    />
                ) : (
                    <NavLinks
                        classname={"desktop"}
                        isMobile={false}
                    />
                )
            }

        </nav>

    )
}

export default NavBar