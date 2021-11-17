import React, {useEffect} from 'react'
import {useRouter} from "next/router";

const AdminPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
            router.push('https://wp-dev.space/education/egor/develop/wp-admin/')
        }, 300)
    }, [])

    const router = useRouter()

    return (
        <div style={{textAlign: "center", padding: "100px 0"}}>
            <h1>Redirecting</h1>
        </div>
    )
}

export default AdminPage;
