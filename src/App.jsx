import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Outlet from "./components/Outlet"
import MainPage from "./pages/MainPages"
import PokemonPage from "./pages/PokemonPages"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import News from "./pages/News"




const App = () => {
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet><MainPage/></Outlet>
    },
    {
        path: 'pokemon/:name',
        element: <Outlet><PokemonPage/></Outlet>
    },
    {
        path: 'Contact/',
        element: <Outlet><ContactPage/></Outlet>
    },
    {
        path: 'About/',
        element: <Outlet><AboutPage/></Outlet>
    },
    {
        path: 'News/',
        element: <Outlet><News/></Outlet>
    }
   
 ])
    
    return(
        <>
       
       
       
        <RouterProvider router={router}/>
       
        </>
    )
}
 
export default App

