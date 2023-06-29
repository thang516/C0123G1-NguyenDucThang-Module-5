import './contract.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import sweat from "sweetalert2"
import * as serviceContract from "../service/ContractService"
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";

export function Contract() {
    const [contract, setContract] = useState([])
const navigate= useNavigate();
    const findAll =async () =>{
        const result = await  serviceContract.getAll();
        setContract(result)
    }


    useEffect(() => {
        findAll();
    }, [])

    const deleteById = async (id) => {
           await  serviceContract.deleteContract(id)
            sweat.fire({
                icon: "success",
                title: "SUCCESSFULLY",
                timer: "2000"
            })
      findAll()
    }

    function deleteContract(id, contractCode) {
        sweat.fire({
                icon: "warning",
                title: `Do you want to delete ${contractCode} ?`,
                showCancelButton: true,
                confirmButtonText: "OK"
            }
        ).then(async (isDelete) => {
            if (isDelete.isConfirmed) {
                deleteById(id);

            }
        })

    }


    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                currentItems.map((contracts) => (
                            <tr key={contracts.id}>
                                <td>{contracts.id}</td>
                                <td> {contracts.contractCode}</td>
                                <td>{contracts.dayStart} </td>
                                <td>{contracts.endDay} </td>
                                <td> {contracts.deposit}</td>
                                <td>{contracts.totalMoney} </td>
                                <td>
                                    <button className="btn btn-success" style={{backgroundColor: "#149570"}} onClick={()=>navigate("/updateContract/"+contracts.id)}>Edit
                                    </button>
                                    <button className="btn btn-success"   onClick={() => deleteContract(contracts.id, contracts.contractCode)} type="button" style={{backgroundColor: "#ff0039"}}  >Delete
                                    </button>
                                </td>
                            </tr>

                        ))
                    }

            </>
        );
    }

    function PaginatedItems({ itemsPerPage , list}) {
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = list.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(list.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % list.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div className="pagination-card">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </>
        );
    }


    return (


        <Layout>
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
                        <th>Function</th>


                    </tr>
                    </thead>
                    <tbody>
                    <PaginatedItems itemsPerPage={3} list={contract}/>

                    </tbody>
                </table>

            </>
        </Layout>
    )
}