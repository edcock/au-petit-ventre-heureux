import Image from "next/image";
import React from "react";
import Link from "next/link";


const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <div className="headerLogoContainer">
                    <Link href={"/"}>
                        <a>
                            <Image src={'/images/logo.svg'} width={120} height={120}/>
                        </a>
                    </Link>
                </div>
                <>
                    <div className="headerNavLinksContainer">
                        <Link href={'/plats-du-jour'}><a className="headerNavLink">Plats du jour</a></Link>
                        <Link href={'/notre-carte'}><a className='headerNavLink'>Notre carte</a></Link>
                        <Link href={'/nos-producteurs'}><a className="headerNavLink"> Nos producteurs</a></Link>
                        <Link href={'/contact'}><a className="headerNavLink"> Contact</a></Link>
                    </div>
                    <div className="headerMobileNavLinksContainer">
                        <a href='tel:0616325023' className='headerMobileNavLink'>
                            <Image src={'/images/call.svg'} width={17} height={18}/>
                        </a>
                        <div id="openingHoursModal" className='headerMobileNavLink'>
                            <Image src={'/images/time.svg'} width={17} height={18}/>
                        </div>
                        <div id="addressModal" className='headerMobileNavLink'>
                            <Image src={'/images/address.svg'} width={17} height={18}/>
                        </div>
                        <div id="menu" className={'headerMobileNavLink'}>
                            <div className="active" onClick={() => {
                            }}>
                                <Image src={'/images/cross.svg'} width={17} height={18}/>
                            </div>
                            <div className="disable">
                                <Image src={'/images/menu.svg'} width={17} height={18}/>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default Header
