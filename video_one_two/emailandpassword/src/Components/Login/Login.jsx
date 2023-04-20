import React, { useState } from 'react';

const Login = () => {
    const[emails,setEmail]=useState('');
    function email(event){
let email2=event.target.value;
setEmail(email2);
        console.log(email2);
    }
    const[passwords,setPassword]=useState('');
    function password(event){
        let password2=event.target.value;
        setPassword(password2);
        console.log(password2);

    }
    const[fulldata,setFulldata]=useState([]);
    function submit(event){
event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
let email22=event.target.email.value;
let password22=event.target.password.value;
setFulldata([email22,password22]);


    }

    console.log(fulldata);
    return (
        <div>
            <p>Login</p>
            <form onSubmit={submit}>
        
                <input onChange={email}  type="email" name="email" id="email" placeholder='email'/>
              
                <input  onBlur={password} type="password" name="password" id="password"placeholder='password' />
                <input  type="submit" value="Resister" />
            </form>
        </div>
    );
};

export default Login;