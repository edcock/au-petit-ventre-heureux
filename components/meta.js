import Head from 'next/head'
import {HOME_OG_DESCRIPTION, HOME_OG_IMAGE_URL, HOME_OG_TITLE, HOME_OG_URL} from '../api/constants'

export default function Meta() {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="48x48"
                href="/favicon/favicon.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/icon.png"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <meta
                name="description"
                content={HOME_OG_DESCRIPTION}
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL}/>
            <meta property="og:title" content={HOME_OG_TITLE}/>
            <meta property="og:image:height" content="400"/>
            <meta property="og:image:width" content="700"/>
            <meta property="og:description" content={HOME_OG_DESCRIPTION}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content={HOME_OG_TITLE}/>
            <meta property="og:locale" content="fr_FR"/>
            <meta property="og:url" content={HOME_OG_URL}/>
            <title>Au petit ventre heureux</title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="aupetitventreheureux.fr"/>
            <meta property="twitter:url" content={HOME_OG_URL}/>
            <meta name="twitter:title" content={HOME_OG_TITLE}/>
            <meta name="twitter:description" content={HOME_OG_DESCRIPTION}/>
            <meta name="twitter:image" content={HOME_OG_IMAGE_URL}/>
        </Head>
    )
}
