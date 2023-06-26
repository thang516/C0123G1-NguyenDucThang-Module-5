import "./updateCustomer.css"
import {useNavigate} from "react-router-dom"
export function CreateCustomer() {
    const navigate = useNavigate();
    return(
    <>

        <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card px-5 py-4">

                        <div style={{textAlign: "center"}}>
                            <h1>Create Customer</h1>
                        </div>
                        <form>
                            <div className="mt-4 inputs"><span>Name Customer</span>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="mt-2 inputs"><span>Type Customer</span>
                                <select name="typeCustomer" style={{width: "100%",height: "40px"}}>
                                    <option value="1">Diamond</option>
                                    <option value="2">Platinum</option>
                                    <option value="3">Gold</option>
                                    <option value="4">Silver</option>
                                    <option value="5">Member</option>
                                </select>
                            </div>


                            <div className="mt-2 inputs"><span>Day Of Birth</span>
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="mt-2 inputs"><span>Gender</span>
                                <select name="sex" style={{width: "100%",height: "40px"}}>
                                    <option value="1">Male</option>
                                    <option value="2">FeMale</option>
                                    <option value="3">other</option>
                                </select>
                            </div>


                            <div className="mt-2 inputs"><span>Identity Card</span>
                                <input className="form-control" type="number"/>
                            </div>

                            <div className="mt-2 inputs"><span>Phone Number</span>
                                <input className="form-control" type="number"/>
                            </div>


                            <div className="mt-2 inputs"><span>Email</span>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="mt-2 inputs"><span>Address</span>
                                <input className="form-control" type="text"/>

                            </div>
                            <div className="text-center mt-4 btn-group">
                                <button type="submit" className=" btn btn-success integration" >
                                    <b>Create</b>
                                </button>
                            </div>
                            <div className="text-center mt-4 btn-group">
                                <button type="submit" className=" btn btn-success integration" onClick={() => navigate('/customer')}
                                        style={{backgroundColor:"black"}}>
                                    <b>Back</b>
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </>
)

}