import Header from "../Header"
import Footer from "../Footer"

const Outlet = (props) => {
    const {children} = props

    return (
        <>

        <Header></Header>
        {children}
        <Footer></Footer>
        {/* {children} */}
        
        </>
    )
}
export default Outlet