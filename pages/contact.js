import Layout from "../components/layout";
import Image from "next/image";
import {useForm} from "react-hook-form";
import React from 'react';
import dynamic from "next/dynamic";
import {send} from 'emailjs-com'

const MapwithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
});
const Contact = () => {
    const {register, handleSubmit, errors} = useForm();
    const sendEmail = (e) => {
        send('service_apvh', 'contact', e, 'user_ADa3MD0No1yxNq2z4woEK').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <Layout>
            <section className="contact-hero-container">
                <div className="contact-hero-title-container">
                    <h4 className="contact-hero-title">
                        34 rue de la République <br/>
                        24200 SARLAT
                    </h4>
                </div>
                <div className='contact-mobile-hero-map'>
                    <MapwithNoSSR/>
                </div>
                <Image src={'/images/facade.jpg'} width={1264} height={668}/>
            </section>
            <div className='flex flex-column vh-100-ns mt4 mt0-ns'>
                <div className="flex flex-row-ns flex-column justify-between-ns">
                    <div className='contact-contact-container'>
                        <div className='footerInformation'>
                            <h3 className='footerTitle'>Contact</h3>
                            <ul className='contactInfoList'>
                                <li className='contactInfo'>
                                    <Image src={'/images/green-icons/call.svg'} width={20} height={20}
                                           alt={'telephone'}/>
                                    <span className='ph3 '>06 16 32 50 23</span>
                                </li>
                                <li className='contactInfo'>
                                    <Image src={'/images/green-icons/call.svg'} width={20} height={20}
                                           alt={'telephone'}/>
                                    <span className='ph3'>05 47 27 40 47</span>
                                </li>
                                <li className={'contactInfo'}>
                                    <Image src={'/images/green-icons/address.svg'} width={20} height={20}
                                           alt={'adresse'}/>
                                    <span className='ph3'> 34 rue de la Republique <br/>24200 SARLAT</span>
                                </li>
                                <li className={'contactInfo'}>
                                    <Image src={'/images/envelop.svg'} width={20} height={20} alt={'enveloppe'}/>
                                    <span className='ph3'>bonjour@aupetitventreheureux.fr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-grow-1 flex justify-end flex-column form-container'>
                        <p className='form-intro'>
                            Utilisez ce formulaire pour communiquer avec nous sans vous déplacer, nous vous répondrons
                            le
                            plus vite possible :)
                        </p>
                        <form onSubmit={handleSubmit(sendEmail)}>
                            <div className="form-field mw6">
                                <label className="input-label">Nom</label>
                                <input name="name" ref={register({required: true})} className={'form-input'}/>
                                {errors.name &&
                                <span
                                    className='input-error'>Il est important pour nous de savoir qui nous contacte.</span>}
                            </div>
                            <div className='form-field'>
                                <label htmlFor="email" className='input-label'>Email</label>
                                <input name="email" type={"email"} ref={register({required: true})}
                                       className='form-input'/>
                                {errors.email &&
                                <span
                                    className='input-error'>L'adresse email est primoridale pour vous recontacter.</span>}
                            </div>
                            <div className='form-field'>
                                <label htmlFor="message" className='input-label'>Message</label>
                                <textarea name='message' ref={register} className='form-input' rows={5}/>
                            </div>
                            <div className='form-field'>
                                <p className="form-disclaimer">
                                    Vous acceptez que les données que vous avez stockées puissent être utilisées à des
                                    fins d'envoi d'informations sur les produits, de soumission d'offres et de lettres
                                    personnelles. La divulgation à des tiers est exclue. Vous pouvez révoquer votre
                                    consentement à tout moment.</p>
                                <div className='flex flex-row'>
                                    <input type="checkbox" name='agree' ref={register({required: true})}/>
                                    <label htmlFor="agree" className='label-disclaimer'>Oui, je donne mon consentement
                                        au
                                        traitement des données.
                                        *</label>
                                </div>
                                {errors.agree &&
                                <span
                                    className='input-error'>Ce renseignement est primoridal pour vous recontacter.</span>}
                            </div>
                            <input type="submit" className="green-cta" value={"Envoyer"}/>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Contact
