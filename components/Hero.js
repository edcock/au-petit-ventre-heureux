import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="heroContainer">
            <div className="heroTitleContainer">
                <h1 className="heroTitle">
                    PLATS CUISINÉS - TRAITEUR <br/>RÔTISSERIE <br/>
                    RESTAURATION RAPIDE <span className='a-emporter'>À EMPORTER</span>
                </h1>
                <h4 className='hero-link'>
                    <Link href={"/notre-carte"}>
                        <a className="heroSubtitle">Voir la carte</a>
                    </Link>
                </h4>
            </div>
            <div className='mobileHeroPicture'>
                <Image src={'/images/hero.jpg'} width={1264} height={668}/>
            </div>
            <div className='heroCTAContainer'>
                <Link href={'plat-du-jour'}>
                    <a className='heroCTA'> Notre selection du jour </a>
                </Link>
            </div>
        </section>
    )
}

export default Hero
