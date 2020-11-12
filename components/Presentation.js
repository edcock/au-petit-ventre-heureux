import Image from "next/image";
import React from "react";

const Presentation = () => {

    return (
        <div id="qui-sommes-nous" className='presentationContainer'>
            <div className="presentationPictureContainer">
                <div className={'presentationPicture'}>
                    <Image src={'/images/facade.jpg'} height={408} width={708}/>
                </div>
                <div className={'presentationPicture'}>
                    <Image src={'/images/planche.jpg'} height={634} width={428}/>
                </div>
            </div>
            <div className='presentationTextContainer'>
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
