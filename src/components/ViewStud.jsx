import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'

const ViewStud = () => {

        const[data,chanagedata]=useState([])

        const fetchData=()=>{
            axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(


                (response)=>{
                    chanagedata(response.data)
                }

            ).catch()
        }

         useEffect(
            ()=>{
                fetchData()
            }
         )

  return (
    <div>

        <div className="container">
            <NaviBar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {data.map(
                            (value,inderx)=>{
                                return(
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                <div class="card-body">
                            <h5 class="card-title">{value.regNo}</h5>
                        <p class="card-text">{value.fullName}</p>
                         <p class="card-text">{value.aadharNumber}</p>
                          <p class="card-text">{value.email}</p>
                           <p class="card-text">{value.phoneNumber}</p>
                            <p class="card-text">{value.branch}</p>
                             <p class="card-text">{value.sslcMark}</p>
                              <p class="card-text">{value.plusTwoMark}</p>
                               <p class="card-text">{value.pgDegree}</p>
                                <p class="card-text">{value.ugDegree}</p>
                                 <p class="card-text">{value.pgMark}</p>
                                  <p class="card-text">{value.ugMark}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                            </div>

                        </div>
                                )

                            }
                        )}
                    </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewStud