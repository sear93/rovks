import {Layout} from "../components/Layout";
import 'swiper/swiper-bundle.css';
import {GlobalStyles} from "../styled/global";
import axios from "axios";
import {GlobalContextProvider} from "../store/global-context";
import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {AnimatePresence} from 'framer-motion'

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({
    minimum: 0.15,
    easing: 'ease',
    speed: 500,
    showSpinner: false
});

function App({Component, pageProps}) {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.debug('AOS init')
    }, [])

    function handleExitComplete() {
        if (typeof window !== 'undefined') {
            window.scrollTo({top: 0})
        }
    }

    const router = useRouter()

    return (
        <>
            <GlobalStyles/>
            <GlobalContextProvider>
                <Layout logo={pageProps.logo} menuItems={pageProps.menuItems} options={pageProps.options}>
                    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                </Layout>
            </GlobalContextProvider>
        </>
    )
}

export default App;

App.getInitialProps = async () => {

    const response = await axios.get(`${process.env.API_URI}/general`)

    return {
        pageProps: {
            logo: response.data.data.logo,
            menuItems: response.data.data.menuItems,
            options: response.data.data.options
        }
    }
}
