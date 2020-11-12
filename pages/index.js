import Layout from '../components/layout'
import {getAllPostsForHome} from '../lib/api'
import Head from 'next/head'
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Image from "next/image";
import Testimonials from "../components/Testimonials";

export default function Index({allPosts}) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout>
                <Head>
                    <title>Au Petit Ventre Heureux</title>
                </Head>
                <Hero/>
                <Presentation/>
                <div className='mt7-ns'>
                    <Image src={'/images/bistrot.jpg'} width={1258} height={770} layout={'responsive'}/>
                </div>
                <Testimonials/>
            </Layout>
        </>
    )
}

export async function getStaticProps({preview}) {
    const allPosts = await getAllPostsForHome(preview)
    return {
        props: {allPosts},
    }
}
