import './CreateContract.css'
import {useNavigate} from "react-router-dom";
export function CreateContract() {
const navigate = useNavigate();
    return(
        <>


            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style={{textAlign: "center"}}>
                                <h1>Create Contract</h1>
                            </div>
                            <form>
                                <div className="mt-4 inputs"><span>Contract Code</span>
                                    <input type="text" className="form-control"/>
                                </div>

                                <div className="mt-2 inputs"><span>Date Start</span>
                                    <input type="date" className="form-control"
                                    />
                                </div>


                                <div className="mt-2 inputs"><span>End Date</span>
                                    <input type="date" className="form-control"/>
                                </div>


                                <div className="mt-2 inputs"><span>Advance Amount</span>
                                    <input className="form-control" type="number"/>
                                </div>


                                <div className="mt-2 inputs"><span>Total Money Payment</span>
                                    <input className="form-control" type="text"/>

                                </div>
                                <div className="text-center mt-4 btn-group">
                                    <button type="submit" className=" btn btn-success integration">
                                        <b>Create</b>
                                    </button>

                                </div>
                                <div className="text-center mt-4 btn-group">
                                    <button type="submit" className=" btn btn-success integration" onClick={()=> navigate('/contract')}
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