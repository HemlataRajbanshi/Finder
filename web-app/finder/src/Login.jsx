import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
// import React, { useState } from 'react'
import Axios from 'axios'


const Login = () => {

    const changeScreen = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email);
    const [loginStat, setLoginStat] = useState("");

    const login = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:8081/login",{
            email: email,
            password: password,
        }).then((response)=>{
            setLoginStat(response.data);
            console.log(response.statusText)

            if(response.data == "Log in Successful"){
                changeScreen('/ForYou')
                alert(response.data);
            }
            else{
                alert(response.data);
            }

        })

    }
    return(
        <div>
            <div className='login'>
                <form action='#'>

                    <h1>Log In</h1>

                    <div className='mail'>
                        <label htmlFor="email"> Email</label>
                        <input type="email" placeholder='Enter your Email' value={email} onChange={e =>setEmail(e.target.value)} id='email' required />
                    </div>

                    <div className='pw'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password' value={password} onChange={e =>setPassword(e.target.value)} id='password' required/>
                    </div>

                    <div>
                    <btn className="loginbtn" onClick={login} >

                            <button className="loginbtn" type='submit'>
                                <a href=""> LogIn</a>
                            </button> 
                        
                    </btn>
                    </div>
                    
                    <l>.</l>
                    <p>Don’t have a Tracker account?<Link to= "/SignUp"><a href="">Sign Up</a></Link> </p>
                    <h1>{loginStat}</h1>
                </form>
            </div>
        </div>
    )
}

export default Login;