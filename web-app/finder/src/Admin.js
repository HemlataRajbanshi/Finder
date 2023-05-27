import React, { useEffect, useState} from "react"
import axios from 'axios';
import './Admin.scss';


function Admin(){

    const[clz, setCollege] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8081/Admin')
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div className="fstdiv"> 
            <div className="snddiv">
                <button className="addbtn"> Add</button>
                <table className="tbl">
                    <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Address</th>
                            <th>Mail</th>
                            <th>Course</th>
                            <th>Link</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                        clz.map((data, i) => (
                            <tr key = {i}>
                                <td>{data.came}</td>
                                <td>{data.caddress}</td>
                                <td>{data.cmail}</td>
                                <td>{data.course}</td>
                                <td>{data.wlink}</td>
                                <td>{data.cimage}</td>
                            </tr>
                            
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Admin