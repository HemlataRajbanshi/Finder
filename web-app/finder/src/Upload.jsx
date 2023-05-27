import React, { useState } from 'react';
import './Upload.scss';
import Axios from 'axios';



const Upload = () => {
    const [cname, setClzname] = useState("");
    const [caddress, setClzadd] = useState("");
    const [cmail, setClzmail] = useState("");
    const [course, setCourse] = useState("");
    const [wlink, setClzlink] = useState("");
    const [cimage, setClzimage] = useState("");

    const [UploadStat, setUploadStat] = useState("");

    const image = (e)=>{
        const imagePath = document.querySelector('#clzphoto').value.split('fakepath\\');
        setClzimage(imagePath[1]);
    }

    const upload = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:8081/upload",{
            cname: cname,
            caddress: caddress,
            cmail: cmail,
            course: course,
            wlink: wlink,
            cimage: cimage,
        }).then((response)=>{
            setUploadStat(response.data);
            console.log(response.statusText)

            if(response.data == "Successfully added"){
                alert(response.data);
            }
            else{
                alert(response.data);
            }

        })}

    return(
    <div className="uform">
        <form method="post">
            {/* <div > */}
            <h1>Fill the details</h1>

            <div className="details"> 
                <label htmlFor="clzname">College name</label>
                <input className="inputbox" type="text" placeholder='Enter the college name' id='clzname' value={cname} onChange={e =>setClzname(e.target.value)} required/>
            </div>

            <div className="details">
                <label htmlFor="clzname">College address</label>
                <input className="inputbox" type="text" placeholder='Enter the college address' id='clzadd'  value={caddress} onChange={e =>setClzadd(e.target.value)} required/>
            </div>

            <div className="details">
                <label htmlFor="clzname">College mail</label>
                <input className="inputbox" type="email" placeholder='Enter the college email' id='clzmail'  value={cmail} onChange={e =>setClzmail(e.target.value)} required/>
            </div>

            <div className="details"> 
                <label htmlFor="clzname">Course available </label>
                <input className="inputbox" type="text" placeholder='Enter the available courses' id='clzcourse'  value={course} onChange={e =>setCourse(e.target.value)} required/>
            </div>

            <div className="details">
                <label htmlFor="linkInput">Website Link</label>
                <input className="inputbox" type="url" placeholder='Enter youe website link' id='linkInput'  value={wlink} onChange={e =>setClzlink(e.target.value)} required/>
            </div>

            <div className="details">
                <label htmlFor="clzphoto">College picture</label>
                <input className="inputbox" type="file" placeholder='Upload picture' id='clzphoto' onChange={image} required/>
            </div>

            <btn className="details" onClick={upload}>
                <button className="click" type='submit'>
                    <a href="">Submit</a> 
                </button>
            </btn>

            <h2>{UploadStat}</h2>

        </form>

    </div>
    )
    
}

export default Upload