import {Services} from "../services/Services";
import Layout from "./Layout";
import {HeaderVideo} from "../header/HeaderVideo";

function Home () {
    return (
        <Layout>
            <>
                <HeaderVideo/>
                <Services/>
            </>
        </Layout>
    );
}
export default Home;