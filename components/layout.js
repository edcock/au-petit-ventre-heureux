import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";
import Link from "next/link";

export default function Layout({pageTitle = "", children}) {
    return (
        <>
            <Meta pageTitle={pageTitle}/>
            <div className="layoutContainer">
                <Header/>
                <main>{children}</main>
                <Footer/>
                <div className="flex flex-row-ns flex-column justify-center">
                    <Link href={'/mention-legales'}><a className='link dark-gray tc pb3 ph3'>Mentions légales</a></Link>
                    <Link href={'https://mister-e.co'}><a className='link dark-gray tc pb3 ph3' target={'_blank'}>Site
                        internet réalisé par Mister-E</a></Link>
                </div>
            </div>
        </>
    )
}
