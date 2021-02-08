import Layout from "../components/layout";

const MentionsLegales = () => {
    return <Layout>
        <h2>Mentions légales</h2>
        <dl className="lh-title pa4 mt0">
            <dt className="f6 b">Hébergement</dt>
            <dd className="ml0">Vercel</dd>
            <dt className="f6 b mt2">adresse</dt>
            <dd className="ml0"> ZEIT, Inc 340 S Lemon Ave #4133 Walnut, CA 91789</dd>
            <dt className="f6 b mt2"> url du site:</dt>
            <dd className="ml0">www.vercel.com</dd>
            <dt className="f6 b mt2">contact</dt>
            <dd className="ml0">privacy@vercel.com</dd>
        </dl>
        <dl className="lh-title pa4 mt0">
            <dt className="f6 b">Société</dt>
            <dd className="ml0">SAS Prosperus</dd>
            <dt className="f6 b">SIREN</dt>
            <dd className="ml0">884937186</dd>
            <dt className="f6 b mt2">adresse</dt>
            <dd className="ml0"> 34 rue de la republique 24200 Sarlat</dd>
            <dt className="f6 b mt2"> Capital social:</dt>
            <dd className="ml0">2000€</dd>
            <dt className="f6 b mt2">responsable de publication</dt>
            <dd className="ml0">Maryline VILLATTE et Pascal PARADOWSKI</dd>
        </dl>
        <dl className="lh-title pa4 mt0">
            <dt className="f6 b">Concepteur</dt>
            <dd className="ml0">EURL Mister-E</dd>
            <dt className="f6 b mt2"> Capital social:</dt>
            <dd className="ml0">100€</dd>
            <dt className="f6 b mt2">SIREN:</dt>
            <dd className="ml0">880 694 732 00012</dd>
            <dt className="f6 b mt2">site:</dt>
            <dd className="ml0">mister-e.co</dd>
        </dl>


    </Layout>
}

export default MentionsLegales
