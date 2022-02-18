import React, {useEffect} from 'react'
import {useRouter} from "next/router";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";
import {motion} from "framer-motion";

const AdminPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
            router.push('https://wp-dev.space/education/egor/develop/wp-admin/')
        }, 300)
    }, [])

    const router = useRouter()

    return (
        <motion.div initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
            <div style={{textAlign: "center", padding: "100px 0"}}>
                <h1>Redirecting</h1>
            </div>
        </motion.div>
    )
}

export default AdminPage;
