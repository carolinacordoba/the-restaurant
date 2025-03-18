import React from 'react'
import { Outlet } from 'react-router-dom'
import AltFooter from '../components/footer/AltFooter'

const AdminLayout = () => {
    return (
        <>
            <Outlet />
            <AltFooter />
        </>
    )
}

export default AdminLayout