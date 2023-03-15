import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import logo from "../../img/logopagina.png"
import { Link } from 'react-router-dom';
import "./login.css"

const Login = ({setIsLogin}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
})
const [err, setErr] = useState("")

const onChangeInput = e => {
    const {name, value} = e.target;
    setUser({...user, [name]: value})
    setErr("")
}


const loginSubmit = async e => {
    e.preventDefault()
    try {
        const alert = await Swal.fire({
            text: "Successful logged in user",
            icon: "success",
            timer: "2000"
           })
        const res = await axios.post("/users/login",{
            email: user.email,
            password: user.password,
            alert
        })
        setUser({name: "", email: "", password: ""})
        localStorage.setItem("tokenStore", res.data.token)
        setIsLogin(true)
        
    } catch (err) {
        err.response.data.msg && setErr(err.response.data.msg)
    }
}


const [,setOnLogin] = useState(false)
  
  return (
   <section>
         <div className="container">
             <div className="wave wave1"></div>
             <div className="wave wave2"></div>
             <div className="wave wave3"></div>
             <div className="wave wave4"></div>
           <img src={logo} alt="" className='logo-app' />
           <div className="items">
            <form className='formu' onSubmit={loginSubmit}>
                 <div className="inputs-login">
                 <label>Email</label>
                 <input type="email" name="email" id="login-email" 
                  required value={user.email} 
                  onChange={onChangeInput}
                 />
                  <span></span>
                </div>

                <div className="inputs-login">
                <label>Password</label>
                    <input type="password" name="password" id="login-password" 
                  required value={user.password} autoComplete="true"
                  onChange={onChangeInput}
                   />
                  <span></span>
                 </div>
                  <Link to="/projects">
                 <button className='btn-login' type='submit'>Login</button>
                 </Link>
                 <p className='parr'>¿No tienes una cuenta? 
                     <Link to="/register">
                     <span onClick={() => setOnLogin(true)}> Regístrate ahora</span>
                     </Link>
                 </p>
                 <h3>{err}</h3>
             </form>
           </div>
       </div>
   </section>
  )
}

export default Login