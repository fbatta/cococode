import { ColorModeScript } from '@chakra-ui/color-mode';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { MyTheme } from '../components/theme';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    {/* run the colormodescript */}
                    <ColorModeScript initialColorMode={MyTheme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
