import { Link } from 'react-router-dom';
import WorksTable from "../worksTable/WorksTable"
import { useState, useEffect } from 'react';
import * as service from "../../services/services"


const Works = () =>{
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        service.getAllWorks(works =>{
            setWorks(works)
        })

    }, [])

    console.log(works)
    

    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    
                </li>

            </ul>
            <h2>Works</h2>
            {
            <WorksTable items = {works}
            />
            }

        </div>
    )

}

export default Works