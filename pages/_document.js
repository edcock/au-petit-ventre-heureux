import Document, {Head, Html, Main, NextScript} from 'next/document'
import { Fragment } from "react";

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const isProduction = process.env.NODE_ENV === 'production';
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps, isProduction};
    }

    setGoogleTags() {
        return {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EYV95QG38G');
      `
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                <Fragment>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-EYV95QG38G"
                    />
                    <script dangerouslySetInnerHTML={this.setGoogleTags()}/>
                </Fragment>
                )}
                </body>
            </Html>
        )
    }
}
