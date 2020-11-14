import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";
import Link from "next/link";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="layoutContainer">
                <Header/>
                <main>{children}</main>
                <Footer/>
                <Link href={'/mention-legales'}><a className='link dark-gray'>Mentions légales</a></Link>
            </div>
        </>
    )
}
