import { Link } from 'react-router-dom';
import * as service from "../../services/services";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Work = (props) =>{
    const navigate = useNavigate();
    const {id} = useParams();

    const deleteHandler = ()=>{
        service.deleteWork(props.id);
        navigate('/');
    }

    return(
        <>
        <tr>
            <td>{props.data}</td>
            <td>{props.klient}</td>
            <td>{props.serv}</td>
            <td>{props.desc}</td>
            <td>{props.timeFrom}</td>
            <td>{props.timeTo}</td>
            <td><Link className='btn btn-primary' to={`/update-work/${props.id}`}>Keisti</Link></td>

            <td><a
            href='#' className='btn btn-primary' onClick={deleteHandler} 
            >Salinti</a></td>
        </tr>
        </>

    )
}

export default Work