import Layout from '../components/layout'
import Head from 'next/head'
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Image from "next/image";

export default function Index() {
    return (
        <>
            <Layout pageTitle={"Accueil"}>
                <Hero/>
                <Presentation/>
                <div className='mt7-ns mb4'>
                    <Image src={'/images/bistrot.jpg'} width={1258} height={770} layout={'responsive'}
                           alt={'presentation de la salle'}/>
                </div>
                {/*<Testimonials/>*/}
            </Layout>
        </>
    )
}
