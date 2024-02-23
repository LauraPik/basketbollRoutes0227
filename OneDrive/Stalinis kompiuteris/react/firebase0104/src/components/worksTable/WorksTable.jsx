import Work from "../work/Work"

const WorksTable = (props) =>{

    return(
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Klientas</th>
                    <th>Suteikta paslauga</th>
                    <th>Aprasymas</th>
                    <th>Nuo</th>
                    <th>Iki</th>
                    <th>Keisti</th>
                    <th>Salinti</th>
                </tr>
            </thead>
            
            <tbody>
                {props.items?.map((data)=>
                <Work
                key = {data.id}
                id = {data.id}
                data = {data.date}
                klient = {data.company}
                desc = {data.description}
                serv = {data.service}
                timeFrom = {data.timeFrom}
                timeTo = {data.timeTo}
                />
                )
                }
            </tbody>
        </table>
    )
}

export default WorksTable