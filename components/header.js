import Image from "next/image";
import React from "react";
import Link from "next/link";


const Header = () => {

    let links = [
        {value: "Sélection du jour", relativePath: "/selection-du-jour"},
        {value: "Notre carte", relativePath: "/notre-carte"},
        {value: "Nos producteurs", relativePath: "/nos-producteurs"},
        {value: "Contact", relativePath: "/contact"},
    ]

    return (
        <>
            <div className="headerContainer">
                <div className="headerLogoContainer">
                    <Link href={"/"}>
                        <a>
                            <Image src={'/images/logo.svg'} width={240} height={240}/>
                        </a>
                    </Link>
                </div>
                <>
                    <div className="headerNavLinksContainer">
                        {
                            links.map((link, index) => {
                                return <Link href={link.relativePath} key={index}><a
                                    className="headerNavLink">{link.value}</a></Link>
                            })
                        }
                    </div>
                    <div className="headerMobileNavLinksContainer">
                        <a href='tel:0616325023' className='headerMobileNavLink z-5'>
                            <Image src={'/images/call.svg'} width={17} height={18}/>
                        </a>
                        <div id="openingHoursModal" className='headerMobileNavLink z-5'>
                            <div className="openingHoursModal active" onClick={() => {
                                document.querySelector('.openingHoursModal.active').style.display = "none"
                                document.querySelector('.openingHoursModal.disable').style.display = "flex"
                            }}>
                                <Image src={'/images/cross.svg'} width={18} height={18}/>
                                <div className='bg-white z-1 pa3 ba'>
                                    <h3>Horaires:</h3>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="timetableElement">Lundi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Mardi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Mercredi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Jeudi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Vendredi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Samedi</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        <tr>
                                            <td className="timetableElement">Dimanche</td>
                                            <td className="timetableElement">09:00-18h00</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="openingHoursModal disable" onClick={() => {
                                if (document.querySelector('.menu-mobile.active').style.display === "flex") {
                                    document.querySelector(".menu-mobile.active").style.display = "none"
                                    document.querySelector(".menu-mobile.disable").style.display = "flex"
                                }
                                document.querySelector(".openingHoursModal.active").style.display = "flex"
                                document.querySelector(".openingHoursModal.disable").style.display = "none"
                            }}>
                                <Image src={'/images/time.svg'} width={18} height={18}/>
                            </div>
                        </div>
                        <div id="addressModal" className='headerMobileNavLink z-5'>
                            <Link href={'/contact'}>
                                <a> <Image src={'/images/address.svg'} width={17} height={18}/></a>
                            </Link>
                        </div>
                        <div id="menu" className='headerMobileNavLink'>
                            <div className="menu-mobile active" onClick={() => {
                                if (document.querySelector('.openingHoursModal.active').style.display === "flex") {
                                    document.querySelector(".openingHoursModal.active").style.display = "none"
                                    document.querySelector(".openingHoursModal.disable").style.display = "flex"
                                }
                                document.querySelector('.menu-mobile.active').style.display = "none"
                                document.querySelector('.menu-mobile.disable').style.display = "flex"
                            }}>
                                <Image src={'/images/cross.svg'} width={18} height={18}/>
                                <div className='headerNavLink-mobile-container'>
                                    {links.map((link, index) => {
                                        return <Link href={link.relativePath} key={index}><a
                                            className="headerNavLink-mobile">{link.value}</a></Link>
                                    })}
                                </div>
                            </div>
                            <div className="menu-mobile disable" onClick={() => {
                                if (document.querySelector('.openingHoursModal.active').style.display === "flex") {
                                    document.querySelector(".openingHoursModal.active").style.display = "none"
                                    document.querySelector(".openingHoursModal.disable").style.display = "flex"
                                }
                                document.querySelector('.menu-mobile.active').style.display = "flex"
                                document.querySelector('.menu-mobile.disable').style.display = "none"
                            }}>
                                <Image src={'/images/menu.svg'} width={18} height={18}/>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default Header
