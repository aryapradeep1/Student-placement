import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'

const ViewStud = () => {

    const [data, chanagedata] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(

            (response) => {
                chanagedata(response.data)
            }

        ).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NaviBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">

                            {data.map((value, inderx) => {

                                return (

                                    <div
                                        key={inderx}
                                        className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
                                    >

                                        <div className="card h-100 shadow">

                                            <div className="card-body d-flex flex-column">

                                                <h5 className="card-title text-primary">
                                                    {value.regNo}
                                                </h5>

                                                <p className="card-text">
                                                    <b>Name :</b> {value.fullName}
                                                </p>

                                                <p className="card-text">
                                                    <b>Aadhar :</b> {value.aadharNumber}
                                                </p>

                                                <p className="card-text">
                                                    <b>Email :</b> {value.email}
                                                </p>

                                                <p className="card-text">
                                                    <b>Phone :</b> {value.phoneNumber}
                                                </p>

                                                <p className="card-text">
                                                    <b>Branch :</b> {value.branch}
                                                </p>

                                                <p className="card-text">
                                                    <b>SSLC :</b> {value.sslcMark}
                                                </p>

                                                <p className="card-text">
                                                    <b>Plus Two :</b> {value.plusTwoMark}
                                                </p>

                                                <p className="card-text">
                                                    <b>UG Degree :</b> {value.ugDegree}
                                                </p>

                                                <p className="card-text">
                                                    <b>UG Mark :</b> {value.ugMark}
                                                </p>

                                                <p className="card-text">
                                                    <b>PG Degree :</b> {value.pgDegree}
                                                </p>

                                                <p className="card-text">
                                                    <b>PG Mark :</b> {value.pgMark}
                                                </p>

                                                <a href="#" className="btn btn-primary mt-auto">
                                                    View Details
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                )

                            })}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStud