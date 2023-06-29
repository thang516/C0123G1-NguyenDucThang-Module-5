import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Covid({information}) {

    return (
        <>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {
                    information.map((info) => (

                        <tr key={info.id}>
                            <td>{info.date}</td>
                            <td>{info.confirmed}</td>
                            <td>{info.active}</td>
                            <td>{info.recovered}</td>
                            <td>{info.deaths}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>

    )
}

export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/covids")
    return {
        props: {
            information: res.data
        }
    }
}