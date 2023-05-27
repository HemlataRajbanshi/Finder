import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './SignUp.scss';

const SignUp = () => {

    const changeScreenofLogin = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email);
    // const [loginStat, setLoginStat] = useState("");
    const [registerStat, setSignUpStat] = useState("");

    const signUp = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:8081/signup",{
            name: name,
            email: email,
            password: password,
        }).then((response)=>{
            setSignUpStat(response.data);
            console.log(response.data)

            if(response.data == "User Registration Successfully"){
                changeScreenofLogin('/ForYou')
                alert(response.data);
            }
            else{
                alert(response.data);
            }
        })

    }




    return(
        <div>
            <div className='signup'>
                <form method='post'>

                    <h1>Sign Up</h1>

                    <div className='name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter your name' id='name' name='name' onChange={(e)=> {setName(e.target.value)}} required/>
                        <span className='errormsg'></span>
                    </div>

                    <div className='smail'>
                        <label htmlFor="email"> Email</label>
                        <input type="email" placeholder='Enter your email' id='email' name='email' onChange={(e)=> {setEmail(e.target.value)}} required/>
                        <span className='errormsg'></span>
                    </div>

                    <div className='pw'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password' id='password' name='password' onChange={(e)=> {setPassword(e.target.value)}} required/>
                        <span className='errormsg'></span>
                    </div>

                    <btn className="loginbtn" onClick={signUp} >
                            <button className="loginbtn" type='submit'>
                                <a href="">Sign Up</a> 
                            </button>
                    </btn>
                    
                    <l>.</l>
                    <p>Already have an account?<Link to= "/SignUp"><a href=""> Log In</a></Link></p>
                    <h1>{registerStat}</h1>
                </form>
            </div>
        </div>
    )
}

export default SignUp;