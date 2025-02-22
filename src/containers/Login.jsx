import { useEffect, useState } from 'react';
import '../assets/styles/AdminSignup.css';
import Button from '../Components/common/Button'
import { useNavigate } from 'react-router-dom';
function Login(){
let inputdata ={
    email:"",
    password:"",
}
    const [logininput, setLoginInput]= useState(inputdata);
    const [matchLogin, setmatchLogin ]= useState({
        email:"admin@gmail.com",
        password:"admin@123",
    });
    const navigate  = useNavigate();

    useEffect(()=>{
    },[logininput])

    const  handleInput=(e)=>{
        const {name, value} = e.target;
        setLoginInput(prev=>({
            ...prev,
            [name]:value
        }))
    }
    console.log(logininput);

    const handleLoginButton=()=>{
        const {email, password} = logininput;
        console.log(email,password);
        if(email === "" && password === ""){
            alert(" all fileds are required");
            return
        }
        
        else if(email === matchLogin.email && password === matchLogin.password){
            alert("login sucesfully");
            setLoginInput(inputdata)
        }
        navigate("/admin");
        
    }
    

    return(
        <>
        <div className='login-container'>
                <div className='quizz-image'>
                <img src="/src/assets/images/quizz.png" alt="Quiz logo" />
                </div>
                <div className='login-form'>
                    <h1>Login</h1>
                    <p>Please enter your details below.</p>

                    <div>
                        <label htmlFor="email">
                            Email <span className='required'>*</span>
                        </label>
                        <br />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            id='user-email'
                            name='email'
                            value={logininput.email}
                            onChange={handleInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password <span className='required'>*</span>
                        </label>
                        <div className='user-password'>
                            <input
                             type='text'
                                placeholder='Enter password'
                                name='password'
                               value={logininput.password}
                               onChange={handleInput}
                            />
                        </div>
                    </div>

                    <Button title="Login" textName="login-button" onClick={handleLoginButton} />
                </div>
            </div>
         </>
    )
}
export default Login