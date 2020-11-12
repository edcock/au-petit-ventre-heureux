import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className='footerSectionContainer'>
                <div className='footerInformationContainer'>
                    <div className={'footerInformation'}>
                        <h3 className='footerTitle'>Contact:</h3>
                        <ul className='contactInfoList'>
                            <li className='contactInfo'>
                                <Image src={'/images/green-icons/call.svg'} width={20} height={20}/>
                                <span className='ph3 link'>06 16 32 50 23</span>
                            </li>
                            <li className={'contactInfo'}>
                                <Image src={'/images/green-icons/call.svg'} width={20} height={20}/>
                                <span className='ph3'>05 47 27 40 47</span>
                            </li>
                            <li className='contactInfo'>
                                <Image src={'/images/green-icons/address.svg'} width={20} height={20}/>
                                <span className='ph3'> 34 rue de la Republique <br/>24200 SARLAT</span>
                            </li>
                            <li className={'contactInfo'}>
                                <Image src={'/images/green-icons/envelop.svg'} width={20} height={20}/>
                                <span className='ph3'>bonjour@aupetitventreheureux.fr</span>
                            </li>
                        </ul>
                    </div>
                    <div className='footerInformation'>
                        <h3 className='footerTitle'>Horaires:</h3>
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
                                <td className="timetableElement">Fermé</td>
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
                    <div className='footerInformation'>
                        <h3 className='footerTitle'>Paiements acceptés:</h3>
                        <div className='payments'>
                            <div className="paymentIcon">
                                <Image src={'/images/visa.svg'} width={100} height={100}/>
                            </div>
                            <div className="paymentIcon">
                                <Image src={'/images/mastercard.svg'} width={100}
                                       height={100}/></div>
                            <div className="paymentIcon">
                                <Image src={'/images/ticket-restaurant.png'} width={100}
                                       height={100}/></div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='footerPhrase'>
                        Pour tous évènements les commandes se prennent 48h à l’avance
                    </p>
                </div>
            </div>
        </footer>
    )
}
