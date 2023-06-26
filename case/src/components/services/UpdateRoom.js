
import './updateService.css'
import {useNavigate} from "react-router-dom";
export function UpdateRoom() {
    const navigate = useNavigate();
return(
    <>

        <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card px-5 py-4">

                        <div style={{textAlign: "center"}}>
                            <h1>Update Room</h1>
                        </div>
                        <form>
                            <div className="mt-4 inputs"><span>Room</span>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mt-2 inputs"><span>Area</span>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="mt-2 inputs"><span>Rental Costs</span>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="mt-2 inputs"><span>Maximum Number Of People</span>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="mt-2 inputs"><span>Type Of Rent</span>
                                <input className="form-control" type="text"/>
                            </div>

                            <div className="mt-2 inputs"><span>Free Service Included</span>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="text-center mt-4 btn-group">

                                <button type="submit" className=" btn btn-success integration">
                                    <b>Update</b>
                                </button>
                            </div>
                            <div className="text-center mt-4 btn-group">
                                <button type="submit" className=" btn btn-success integration" onClick={()=>navigate('/home')}
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