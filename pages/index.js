import Layout from '../components/layout'
import Head from 'next/head'
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Image from "next/image";
import Testimonials from "../components/Testimonials";

export default function Index({data}) {
    console.log(data)
    return (
        <>
            <Layout>
                <Head>
                    <title>Au Petit Ventre Heureux</title>
                </Head>
                <Hero/>
                <Presentation/>
                <div className='mt7-ns'>
                    <Image src={'/images/bistrot.jpg'} width={1258} height={770} layout={'responsive'}
                           alt={'presentation de la salle'}/>
                </div>
                <Testimonials/>
            </Layout>
        </>
    )
}
