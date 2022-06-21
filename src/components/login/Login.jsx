import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
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

const navigate = useNavigate();

const registerSubmit = async e => {
    e.preventDefault()
    try {
        const alert = await Swal.fire({
            title: "Register Success",
            text: "now log in",
            icon: "success",
            timer: "2000"
           })
        const res = await axios.post("/users/register",{
            username: user.name,
            email: user.email,
            password: user.password,
            alert
        })
        setUser({name: "", email: "", password: ""})
        setErr(res.data.msg)
        
    } catch (err) {
        err.response.data.msg && setErr(err.response.data.msg)
    }
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
        navigate.push("/projects");
        setIsLogin(true)
        
    } catch (err) {
        err.response.data.msg && setErr(err.response.data.msg)
    }
}


const [onLogin, setOnLogin] = useState(false)
const style ={
    visibility: onLogin ? "visible" : "hidden",
    opacity: onLogin ? 1 : 0
}
  
  return (
   <section>
         <div className="container">
             <div className="wave wave1"></div>
             <div className="wave wave2"></div>
             <div className="wave wave3"></div>
             <div className="wave wave4"></div>
           <span className="title">¡Bienvenido de nuevo!</span>
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
                     <span onClick={() => setOnLogin(true)}> Regístrate ahora</span>
                 </p>
                 <h3>{err}</h3>
             </form>
           </div>
           <div className="container" style={style}>
           <div className="wave wave1"></div>
             <div className="wave wave2"></div>
             <div className="wave wave3"></div>
             <div className="wave wave4"></div>
           <span className="title">¡Hola Bienvenido Registrece!</span>
           {/* <img src={logo} alt="" className='logo-app' /> */}
           <div className="items">
             <form onSubmit={registerSubmit}>
             <div className="inputs-login">
             <label>Nombre</label>
             <input type="text" name="name" id="login-name" 
                 required value={user.name}
                 onChange={onChangeInput}/>
                    <span></span>
                    </div>
                    <div className="inputs-login">
                    <label>Email</label>
                 <input type="email" name="email" id="register-email" 
                 required value={user.email}
                 onChange={onChangeInput}/>
                    <span></span>
                    </div>

                    <div className="inputs-login">
                    <label>Password</label>
                    <input type="password" name="password" id="register-password" 
                  required value={user.password} 
                 autoComplete="true" onChange={onChangeInput}/>
                    <span></span>
                    </div>
                 <button className='btn-login' type='submit'>Registrarse</button>
                 <p className='parr'>¿Ya tienes una cuenta? 
                     <span onClick={() => setOnLogin(false)}> Ingresa ahora</span>
                 </p>
                 <h3>{err}</h3>
             </form>
             </div>
             </div>
       </div>
   </section>
  )
}

export default Login