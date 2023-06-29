import {Header} from "../header/Header";
import {Services} from "../services/Services";
import {Footer} from "../footer/Footer";
import {CreateSer} from "../services/CreateSer";

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