import Image from "next/image";
import React from "react";

const Presentation = () => {

    return (
        <div className='presentationContainer' onWheel={() => {
            document.querySelectorAll('.presentationPicture').forEach((item) => {
                item.style.opacity = 1
            });
        }}
             onTouchMove={() => {
                 document.querySelectorAll('.presentationPicture').forEach((item) => {
                     item.style.opacity = 1
                 });
             }}
        >
            <div className="presentationPictureContainer">
                <div className='presentationPicture '>
                    <Image src={'/images/facade.jpg'} height={408} width={708} alt="Au petit ventre heureux ! "/>
                </div>
                <div className='presentationPicture'>
                    <Image src={'/images/planche.jpg'} height={634} width={428} alt="planche apéro !"/>
                </div>
                <div className='background-color-mobile'/>
            </div>
            <div className='presentationTextContainer'>
                <div className='background-color-desktop'/>
                <div className='presentationText'>
                    <h2 className='presentationTitle'> Pourquoi nous choisir ?</h2>
                    <p className='presentationBody'>
                        <span className='highlights'>Nous sommes une petite entreprise familiale. </span>Notre savoir
                        faire et notre proximité avec nos clients nous permet de facilement comprendre leurs
                        besoins et d’adapter nos propositions au plus proche de leurs attentes. Notre chef, au
                        quotidien, axe son travail sur la créativité et l’originalité.
                        <br/><span className='highlights'> Oui chef !!</span>
                    </p>
                </div>
                <div className='presentationText'>
                    <h2 className={'presentationTitle'}> Nos engagements</h2>
                    <p className={'presentationBody'}>Le Petit Ventre Heureux à fait le choix de <span
                        className="highlights">favoriser les fournisseurs locaux </span>et les filières
                        courtes
                        afin de garantir la fraîcheur des produits cuisinés.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Presentation
