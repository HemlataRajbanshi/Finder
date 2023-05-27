import React from "react";
import './ForYou.scss';
import './About.scss';
import './App.css';
import { Link } from 'react-router-dom';


function About(){
    return(
        <main className='about'>
        <nav className='navbar' >
            <p>Finder</p>
                <ul>
                    <li><a herf="#"><Link to= "../ForYou"> For You</Link></a></li>
                    <li><a herf="#"><Link to= "./About"> About Us</Link></a></li>
                    <li>
                    <div className="box">
                        <button className="btn"><Link to = "../ForYou/Upload">Upload</Link></button>
                    </div>
                    </li>
                </ul>
            </nav>


        <p>Our mission at Finder is to aid students in finding their dream
            college by providing various services to simplify the college search process.
            We understand that the search can be daunting and stressful, so our team of
            knowledgeable professionals is here to offer expert advice, support, and guidance
            to help you make informed decisions about your education. Whether it's selecting
            the best institution or navigating the financial aid process, we're committed
            to supporting you at every step of the way. Our ultimate goal is to help you find
            an institution that aligns with your academic goals and aspirations because we believe
            that everyone deserves access to a high-quality education that can help them
            achieve their objectives. </p>

        </main>
        )
}

export default About

