import {MainLayout} from "../components/MainLayout";
import 'swiper/swiper-bundle.css';
import {GlobalStyles} from "../styled/global";
import axios from "axios";
import {GlobalContextProvider} from "../store/global-context";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

    return (
        <GlobalContextProvider>
            <MainLayout logo={pageProps.logo} menuItems={pageProps.menuItems} options={pageProps.options}>
                <GlobalStyles/>
                <Component {...pageProps} />
            </MainLayout>
        </GlobalContextProvider>
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
