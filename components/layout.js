import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="layoutContainer">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}
