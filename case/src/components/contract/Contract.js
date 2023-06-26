import './contract.css'
export function Contract() {
return(
    <>

        <div style={{textAlign: "center"}}>
            <h1>Contract List</h1>

        </div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>STT</th>
                <th>Contract Code</th>
                <th>Day Start</th>
                <th>End Day</th>
                <th>Deposit</th>
                <th>Total Money Payment</th>


            </tr>
            </thead>
            <tbody>
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>


            </tr>
            </tbody>
        </table>
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="pagination-container row container d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">

                                <nav>
                                    <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                        <li className="page-item"><a className="page-link" href="#" data-abc="true"><i
    className="fa fa-angle-left"/></a></li>
                                        <li className="page-item active"><a className="page-link" href="#"
                                                                            data-abc="true">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#"
                                                                     data-abc="true">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#"
                                                                     data-abc="true">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"
                                                                     data-abc="true">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#" data-abc="true"><i
    className="fa fa-angle-right"/></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>

        </div>
    </>
)
}