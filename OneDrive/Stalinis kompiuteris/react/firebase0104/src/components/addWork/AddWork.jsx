import {Link, Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as service from "../../services/services";
import { useNavigate } from "react-router-dom";




const AddWork = (props) =>{
    const {id} = useParams();

    const [items, setItems] = useState(
        {
            date:'',
            company: '',
            service: '',
            description:'',
            timeFrom:'',
            timeTo:''

        }
    )

    useEffect(()=>{
        id && service.showById(item=>setItems(item), id)
        console.log("Israso id:", id)

    }, [id])

    console.log(id)

    const handleChange = (event)=>{
        setItems(
        {
            ...items,
            [event.target.name]:event.target.value


        }
        )
    }
     
    const submitHandle = (event) =>{
        event.preventDefault();
        if (id) {
            service.updateWork(id,items)
        
    }else{
        service.addWork(items)
        
    }
    Navigate('/');
}

    
    
    return(
        <div className="card">
            <div className="card-header">
                <h2>Pridėti atliktą darbą</h2>
            </div>

            <div className="card-body">
                <form className="form" onSubmit={submitHandle}>
                    <div className="mb-3">
                        <label htmlFor="date">Paisrinkite data:</label>
                        <input className="form-control" id="date" type="date" name="date" value={items.date}  onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <select name="company" id="company" className="form-control" value={items.company} onChange={handleChange} >
                            <option value="kb">Kilobaitas</option>
                            <option value="it">It sfera</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <select name="service" id="service" className="form-control" value={items.service} onChange={handleChange} >
                                <option value="dev">Development</option>
                                <option value="ux">UX design</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <textarea name="description" id="description" className="form-control" placeholder="Darbo aprasymas" onChange={handleChange} value={items.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">Nuo:</label>
                        <input type="time" id="from" name="from" value={items.form} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">Iki:</label>
                        <input type="time" id="to" name="to" value={items.to} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        {(id)?<button type="submit">Atnaujinti</button>:<button type="submit">Saugoti</button>}
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWork
