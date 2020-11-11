import Layout from "../components/layout";
import Head from "next/head";

export default () => {
    return (
        <Layout>
            <Head>
                <title>Au Petit Ventre Heureux</title>
            </Head>
            <div className='menuContainer'>
                <div className='menu first'>
                    <h3>Notre charcuterie :</h3>
                    <ul>
                        <li>Jambon cru</li>
                        <li>Jambon blanc</li>
                        <li>Saucisson de canard</li>
                        <li>Magret Séchet</li>
                        <li>Côtelettes agneau</li>
                    </ul>
                </div>
                <div className='menu second'>
                    <h3>Nos fromages :</h3>
                    <ul>
                        <li>Tomme des croquant à l’ail des Gars</li>
                        <li>Tomme des croquant à la liqueur de Noix</li>
                        <li>Pure Brebis affinés 12 mois</li>
                        <li>Brebis bleu piment</li>
                    </ul>
                </div>
                <div className='menu third'>
                    <h3>Nos plats cuisinés :</h3>
                    <ul>
                        <li>Filet de dinde à la crème</li>
                        <li>Ragout d’agneau</li>
                        <li>Saumon</li>
                        <li>Soupe</li>
                    </ul>
                </div>
                <div className='menu fourth'>
                    <h3>Nos sandwichs :</h3>
                    <ul>
                        <li>Pain Bagniat</li>
                        <li>Jambon blanc</li>
                        <li>Saucisson de canard</li>
                        <li>Magret Séchet</li>
                        <li>Côtelettes agneau</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
