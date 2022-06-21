import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import logologin from "../../img/logoLogin0.png"
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
           <div className='rectangulo1'>
              <div className='rectangulo2'>
                </div>
           </div>
           <span className="title">¡Bienvenido de nuevo!</span>
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
           <div className='rectangulo1'>
              <div className='rectangulo2'>
                </div>
           </div>
           <span className="title">¡Hola Bienvenido Registrece!</span>
           <div className="items">
             <form onSubmit={registerSubmit}>
             <div className="inputs-login">
             <input type="text" name="name" id="login-name" 
                 placeholder='User Name...' required value={user.name}
                 onChange={onChangeInput}/>
                    <span></span>
                    </div>
                    <div className="inputs-login">
                 <input type="email" name="email" id="register-email" 
                 placeholder='Email...' required value={user.email}
                 onChange={onChangeInput}/>
                    <span></span>
                    </div>

                    <div className="inputs-login">
                    <input type="password" name="password" id="register-password" 
                 placeholder='Password...' required value={user.password} 
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
           <div className="left-2">
              <div className="img-left-2">
                <img src={logologin} alt="" className='logo'/>
                <span className='welcome'>Bienvenidos</span>
                <span className='welcome'>a</span>
                <span className='welcome'>Hoy lo firmo</span>
                </div>
           </div>
   </section>
  )
}

export default Login