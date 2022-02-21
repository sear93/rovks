import {Layout} from "../components/Layout";
import 'swiper/swiper-bundle.css';
import {GlobalStyles} from "../styled/global";
import axios from "axios";
import {GlobalContextProvider} from "../store/global-context";
import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {AnimatePresence} from 'framer-motion'
import ModalManager from "../components/ModalManager";

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

    const router = useRouter();

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = event => {
        event.preventDefault()
        const eventWithModalDataSet = event.target.closest('button[data-modal]')
        if (eventWithModalDataSet) {
            const dataSetModal = eventWithModalDataSet.dataset.modal
            if (dataSetModal) setModalOpen(dataSetModal)
        }
    }

    const closeModal = () => {
        setModalOpen('')
    }

    return (
        <>
            <GlobalStyles/>
            <GlobalContextProvider>
                <Layout openModal={openModal} logo={pageProps.logo} menuItems={pageProps.menuItems}
                        options={pageProps.options}>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                    <ModalManager closeModal={closeModal} modal={modalOpen}/>
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
            logo: response.data.logo,
            menuItems: response.data.menuItems,
            options: response.data.options
        }
    }
}
