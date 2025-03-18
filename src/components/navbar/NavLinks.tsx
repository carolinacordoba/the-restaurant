import { VscChromeClose } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom'

interface INavLinks {
    title: string,
    path: string,
}

const navLinks: INavLinks[] = [
    {
        title: "HEM",
        path: "/",
    },
    {
        title: "BOKA BORD",
        path: "/boka",
    },
    {
        title: "MENY",
        path: "/meny",
    },
    {
        title: "KONTAKT",
        path: "/kontakt"
    },
]

interface NavLinksProps {
    classname: string;
    isMobile: boolean;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    isClosing?: boolean;
    setIsClosing?: (isClosing: boolean) => void;
}
const NavLinks = ({ classname, isMobile, isOpen, setIsOpen, isClosing, setIsClosing }: NavLinksProps) => {

    const handleMenuClosing = () => {
        setIsClosing!(true)
        setTimeout(() => setIsOpen!(false), 600)
    }



    return (
        <div className={`nav__${classname}  ${isMobile ? (isOpen ? ("show") : ("hidden")) : ("")}  ${isClosing ? ("closing") : ("")}`}>
            {isMobile && (
                <>
                    <div className={`nav__${classname}__top`}>
                        <img src="/logga-camatheo.png" alt="log" className={`nav__${classname}__top__logo`} />
                        <VscChromeClose className={`nav__${classname}__top__close`} onClick={handleMenuClosing} />
                    </div>

                </>
            )}
            {isMobile ? (
                <div className={`nav__${classname}__bottom`}>
                    {
                        navLinks.map((link, i) => (
                            <NavLink to={link.path} key={i}
                                className={({ isActive }) => `nav__${classname}__bottom__link ${isActive ? "active" : ""}`}
                                onClick={handleMenuClosing}
                            >
                                {link.title}
                            </NavLink>
                        ))
                    }
                </div>
            ) : (
                navLinks.map((link, i) => (
                    <NavLink to={link.path} key={i}
                        className={({ isActive }) => `nav__${classname}__link ${isActive ? "active" : ""}`}
                    >
                        {link.title}
                    </NavLink>
                ))

            )}

        </div>
    )
}

export default NavLinks