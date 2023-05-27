import React from "react";
import { Link } from 'react-router-dom';
import './Home.scss';
import university from './unsplash/university.png';

function Home(){
    return(
        <div className="home">

            <nav className="navbar">
                <ul>
                    <li>Finder</li>
                </ul>
            </nav>

            <div className="text">
                <p>Looking for college of your dream?
                Best place for you to find it.</p>
            </div>
            <div className="stext">
                <h5>Explore more</h5>
            </div>



            <div className="btn">
                <div className="box1">
                    <button className="btn1"> <Link to= "/Login"> Login </Link> </button>
                </div>

                <div className="box2">
                    <button className="btn2"> <Link to= "/SignUp"> SignUp </Link> </button>
                </div>
            </div>
            
            <div className="last">
                <img src= {university} alt="university" />
            </div>
        </div>
    );
}

export default Home;