import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import './ForYou.scss';
import { Link } from 'react-router-dom';
import ktm from './unsplash/kathamnduEngineeringCollege.jpg';
import { Axios } from 'axios';

function ForYou(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8081/colleges').then((response) => response.json()).then((data) => {
            setData(data)
        })
    },[])

    // if(data)
    // console.log(data[0].cimage)
    //     console.log(`data:image/bmp;base64,${data[0].cimage}`)

    const getBase64FromBuffer = (buffer) => {
        const base64String = Buffer.from(buffer).toString('base64');
        const imgSrc = `data:image/jpg;base64,${base64String}`;
        console.log(imgSrc)
        return imgSrc
    }

    return(
        <main className='foryou'>
            <nav className='navbar' >
            <p>Finder</p>
                <ul>
                    <li><a herf="#"><Link to= "../ForYou"> For You</Link></a></li>
                    <li><a herf="#"><Link to= "./About"> About Us</Link></a></li>
                    <li>
                    <div className="box">
                        <button className="btn"><Link to = "./Upload">Upload</Link></button>
                    </div>
                    </li>
                </ul>
            </nav>

            <div className="collection">
                {
                    data ? (
                        data.map((college) => {
                            return <div className="clzlist">
                                    <div className='styleimg'>
                                        <img src={require(`../src/unsplash/${college.cimage}`)} alt="uni" />
                                    </div>

                                    <div className='details'>
                                        <h4>{college.cname}</h4>
                                        <p>{college.caddress}</p>
                                        <p>{college.cmail}</p>
                                        <p> <b>{college.course}</b></p>
                                        <a href={college.wlink} target='_blank'>Learn More</a>
                                    </div>
                                </div>
                        })
                    ):
                    <h1>No college details found</h1>
                }
            </div>
        </main>
    );
}

export default ForYou;