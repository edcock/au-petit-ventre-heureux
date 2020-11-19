import Layout from "../components/layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

const NotreCarte = () => {
    return (
        <Layout>
            <Head>
                <title>Au Petit Ventre Heureux</title>
            </Head>
            <div className='menuContainer'>
                <div className='flex flex-row-ns flex-column center-ns flex-grow-1'>
                    <div className="vertical-separator">
                        <div className='menu'>
                            <div className='menu-list'>
                                <h3>La charcuterie</h3>
                                <ul>
                                    <li>Jambon cru ou blanc</li>
                                    <li>Saucisson de canard</li>
                                    <li>Magret Séchet</li>
                                    <li>Côtelettes d'agneau</li>
                                    <li>Entrecôte</li>
                                </ul>
                            </div>
                            <div className="separator"/>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='menu-list'>
                            <h3>Le fromage</h3>
                            <ul>
                                <li>Tomme des Croquants à l’ail des Ours</li>
                                <li>Tomme des Croquants à la liqueur de Noix</li>
                                <li>Tomme des Croquants à la truffe d'été</li>
                                <li>Pure Brebis affinés 12 mois</li>
                            </ul>
                        </div>
                        <div className="separator"/>
                    </div>
                </div>
                <div className='flex flex-row-ns flex-column center-ns flex-grow-1'>
                    <div className="vertical-separator">
                        <div className='menu'>
                            <div className='menu-list'>
                                <h3>Nos plats cuisinés</h3>
                                <ul>
                                    <li>Aubergine gratinée</li>
                                    <li>Noix patissière de veau</li>
                                    <li>Saumon</li>
                                    <li>Gigot d'agneau</li>
                                    <li>Soupe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='menu fourth'>
                        <div className='menu-list'>
                            <h3>Nos petits pains gourmands</h3>
                            <ul>
                                <li>Pain Bagniat</li>
                                <li>Jambon blanc</li>
                                <li>Jambon cru - fromage</li>
                                <li>Foie gras de canard</li>
                                <li>Magret Séchet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chef-container">
                <div className="separator"/>
                <div className="flex flex-column flex-row-ns items-start justify-center mt5-ns">
                    <div
                        className="w-100 order-2-ns order-1">
                        <h1 className="chef-title">Notre Chef</h1>
                        <p className="chef-description">
                            Notre chef Pascal est passionné par la cuisine, c’est pour cette raison qu’il décide avec sa moitié Mary de s’installer dans la traverse à Sarlat la Caneda. <br/>Notre chef considère ses assiettes comme un défi, il faut une bonne cohérence entre les différentes sensations du toucher, du goût, de l'odorat, de la vue et ainsi parfaire ses créations.
                        </p>
                    </div>
                    <div
                        className="order-2-ns flex justify-end order-2 mb4 mb0-ns">
                        <Image src={"/images/photo-chef.jpg"} width={874} height={722} alt="Notre Chef Pascal ! "/>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export default NotreCarte;
