import NavBar from "../navBar/NavBar"
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout