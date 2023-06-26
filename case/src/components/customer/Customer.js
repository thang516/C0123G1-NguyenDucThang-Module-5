import './customer.css'
export function Customer() {



    return(
        <>
            <div style={{textAlign:" center"}}>
                <h1>Customer List</h1>

            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Customer Name</th>
                    <th>Type Customer</th>
                    <th>Day Of Birth</th>
                    <th>Gender</th>
                    <th>Identity Card</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Function</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td>Nguyễn ĐỨc Thắng</td>
                        <td>Diamond</td>
                        <td>05/06/2001</td>
                        <td>Nam</td>
                        <td>201854945</td>
                        <td>0782391943</td>
                        <td>nguyenthangfa2001@gmail.com</td>
                        <td>Hòa Xuân,Cẩm Lệ,Đà Nẵng</td>
                        <td>
                            <button className="btn btn-success" style={{backgroundColor: "#149570"}}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039"}}
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">Delete
                            </button>
                        </td>
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


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
    aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                Are you sure you deleted it?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}