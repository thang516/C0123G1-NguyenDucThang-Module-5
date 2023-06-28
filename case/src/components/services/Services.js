import './services.css'
// import React, {useEffect, useState} from "react";
import {Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";
// import axios from "axios";
 export  function Services() {
const [service,setService] = useState([])
     useEffect(()=>{
         const fetchApi = async ()=>{
             try {
                 const result = await  axios.get("http://localhost:8080/services")
                 setService(result.data)
             }catch (e) {
                 console.log(e)
             }
         }
         fetchApi()
     },[])
const navigate = useNavigate();
    return(
        <>
            <div className="card-container" >
                <div className="card-group">
                    <div className="row">
            {
                service.map((services) => (
                    <div className="col-md-4">
                    <div className="card">
                        <img
                            src={services.img}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{services.name}</h5>
                            <p className="card-text">
                                <p>{services.rentalCost}</p>
                            </p>
                        </div>
                        <div className="card-footer">
                            <Link to={'/createService'}>
                                <button
                                    className="btn btn-success"  style={{ backgroundColor: "#56cc9d" }} onClick={()=> navigate('/updateRoom')} >
                                    Edit
                                </button>
                            </Link>

                            <button
                                className="btn btn-success"
                                type="button"
                                style={{ backgroundColor: "#ff0039" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    </div>
                ))
            }
                    </div>
                </div>
            </div>
                {/*<div className="card-container" >*/}
                {/*    <div className="card-group">*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://booking-static.vinpearl.com/room_types/6566f8500c334c14b7c9a6595a04b2c9_D8H_7166.jpg"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Twin</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    Enjoy the versatility of our Deluxe Twin room, furnished with twin*/}
                {/*                    beds for added versatility, ideal for both leisure and business*/}
                {/*                    trips.Tuck into the comforts of your room, which include*/}
                {/*                    complimentary Wi-Fi, a walk-in shower, and an LED TV with satellite*/}
                {/*                    news, cable network, movies and local channels, among many other*/}
                {/*                    amenities.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <Link to={'/createService'}>*/}
                {/*                    <button*/}
                {/*                        className="btn btn-success"  style={{ backgroundColor: "#56cc9d" }} onClick={()=> navigate('/updateRoom')} >*/}
                {/*                        Edit*/}
                {/*                    </button>*/}
                {/*                </Link>*/}

                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://booking-static.vinpearl.com/room_types/363438a81590466697fafaad3eb2ac97_POP_0790.jpg"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Deluxe </h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    Enjoy panoramic views of Sunway Lagoon from the comfort of your*/}
                {/*                    room. Room furnished with a king bed, complimentary Wi-Fi, a walk-in*/}
                {/*                    shower, and LED TV.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"  style={{ backgroundColor: "#56cc9d" }} onClick={()=> navigate('/updateRoom')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/442448238.jpg?k=a8e54edc723efd520c7af73f0ab070e973ceb5e1b158b55a59ebad9899455e67&o=&hp=1"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Bungalow</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    These relaxing rooms are perfect for couples. Our charming bungalows*/}
                {/*                    offer ocean, pool or garden views and include stunning private*/}
                {/*                    outdoor baths and showers, in addition to an indoor shower.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }} onClick={()=>navigate('/updateRoom')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card-group">*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://ticotravel.com.vn/wp-content/uploads/2022/02/Phong-Nha-Lake-House-resort-23.jpg"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">House Luxury</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    The design House Resort makes visitors feel both familiar and new*/}
                {/*                    because it is a combination of Australian and Asian architecture.*/}
                {/*                    Familiar because of the rustic features of Asian architectural*/}
                {/*                    culture; This is a novelty by modern Western architecture. This*/}
                {/*                    blend does not make the space cluttered, contrasting, but on the*/}
                {/*                    contrary creates a design style with a harmonious interference,*/}
                {/*                    raising the level of the resort.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }} onClick={navigate('/updateHouse')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://ik.imagekit.io/tvlk/blog/2019/12/nhung-resort-dep-o-phu-quoc-The-Garden-House-Phu-Quoc-2.jpg?tr=dpr-2,w-675"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">House Vintage</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    The Garden House has a quiet garden style and bold Vietnamese*/}
                {/*                    countryside. The campus of this resort is filled with cool green*/}
                {/*                    except for the trees that shade the footpath, the smooth green lawns*/}
                {/*                    winding, and the rooms are tiled with glossy brown bricks. The hotel*/}
                {/*                    is located quite far from the center.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }}*/}
                {/*                onClick={()=>navigate('/updateHouse')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://angcovat.vn/imagesdata/TIN327127/2-cac-mau-bungalow-trong-resort-dep.jpg"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="Massage" style={{ padding: 20 }}>*/}
                {/*                <h5 className="card-title">Chilling House</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    The design of the bungalow on the sea is sure and brings a sense of*/}
                {/*                    familiarity with the surrounding nature. In this design, suitable*/}
                {/*                    for large blue sea areas, high-class design with luxurious lobby,*/}
                {/*                    veranda, wooden stairs to the sea.The area of ​​this bungalow is*/}
                {/*                    relatively large, the large area for the porch with loungers and*/}
                {/*                    sunbathing will be a great suggestion for the design of beautiful*/}
                {/*                    beach bungalows.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }}*/}
                {/*                onClick={()=>navigate('/updateHouse')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card-group">*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/268611340.jpg?k=8166d9af187ec6951fcf8b8a047b20c7cc950f9d2f74f361a6ea6480b04a6d33&o=&hp=1"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Villa</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    Fitted with a balcony, the units offer air conditioning and feature*/}
                {/*                    a flat-screen TV and a private bathroom with bidet and free*/}
                {/*                    toiletries. There is also a fridge, minibar and a kettle. The daily*/}
                {/*                    breakfast offers à la carte, Asian or vegetarian options.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }} onClick={()=>navigate('/updateService')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/209186162.jpg?k=fee2bce064332027412a08d9b2e11585f376587a1b8fc952460ec2d09da323cf&o=&hp=1"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Villa Relax</h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    Offering garden views, Santorin HoiAn Villa in Hoi An offers*/}
                {/*                    accommodation, free bikes, an outdoor swimming pool, a garden, a*/}
                {/*                    shared lounge and a terrace. Both WiFi and private parking are*/}
                {/*                    accessible at the villa free of charge. Fitted with a balcony, the*/}
                {/*                    units offer air conditioning and feature a flat-screen TV and a*/}
                {/*                    private bathroom with bidet and free toiletries. A minibar and*/}
                {/*                    kettle are also offered.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }} onClick={()=>navigate('/updateService')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card">*/}
                {/*            <img*/}
                {/*                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/429302385.jpg?k=4a999e5f7efce5f168c08a659ce858055b7796be9fa0fbd375228eb692f803d7&o=&hp=1"*/}
                {/*                className="card-img-top"*/}
                {/*                alt="..."*/}
                {/*            />*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Villa Luxury </h5>*/}
                {/*                <p className="card-text">*/}
                {/*                    There is a private bathroom with shower in every unit, along with*/}
                {/*                    free toiletries, a hairdryer and slippers. An à la carte breakfast*/}
                {/*                    is available daily at the villa. Hiking and cycling can be enjoyed*/}
                {/*                    nearby.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer">*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    style={{ backgroundColor: "#56cc9d" }}  onClick={()=>navigate('/updateService')}*/}
                {/*                >*/}
                {/*                    Edit*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="btn btn-success"*/}
                {/*                    type="button"*/}
                {/*                    style={{ backgroundColor: "#ff0039" }}*/}
                {/*                    data-bs-toggle="modal"*/}
                {/*                    data-bs-target="#exampleModal"*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}






                <div className="page-content page-container" id="page-content">
                    <div className="padding" >
                        <div className="pagination-container row container d-flex justify-content-center">
                            <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <nav>
                                            <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                                <li className="page-item">
                                                    <span className="page-link"  data-abc="true">
                                                        <i className="fa fa-angle-left" />
                                                    </span>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        4
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                   Notification
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Are you sure you deleted it?</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    )



}