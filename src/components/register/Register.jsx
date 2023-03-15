import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import logo from "../../img/logopagina.png"
import { Link } from 'react-router-dom';
import "./register.css";

const Register = () => {

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


  return (
    <section>
    <div className="container-register">
    <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    <img src={logo} alt="" className='logo-app-register' />
    <div className="items-register">
      <form onSubmit={registerSubmit} className="formu-register">
      <div className="inputs-register">
      <label>Nombre</label>
      <input type="text" name="name" id="login-name" 
          required value={user.name}
          onChange={onChangeInput}/>
             <span></span>
             </div>
             <div className="inputs-register">
             <label>Email</label>
          <input type="email" name="email" id="register-email" 
          required value={user.email}
          onChange={onChangeInput}/>
             <span></span>
             </div>

             <div className="inputs-register">
             <label>Password</label>
             <input type="password" name="password" id="register-password" 
           required value={user.password} 
          autoComplete="true" onChange={onChangeInput}/>
             <span></span>
             </div>
          <button className='btn-register' type='submit'>Registrarse</button>
          <p className='parr-register'>¿Ya tienes una cuenta?
             <Link to="/">
              <span> Ingresa ahora</span>
              </Link> 
          </p>
          <h3>{err}</h3>
      </form>
        </div>
      </div>
      </section>
  )
}

export default Register