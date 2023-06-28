import {Header} from "../header/Header";
import {Services} from "../services/Services";
import {Footer} from "../footer/Footer";

function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
export default Layout;