import React from 'react'
import logoImg from '../../assets/logo.png'
import './index.css'

const Login = () => {
    return (<div className='login' id="login">
        <div className='login-form-container'>
            <div className='login-container-inside'>
                <h1>Bienvenido a BPI</h1>
                <h3>Inicia Sesión</h3>
                <div className='login-form'>
                    <form>
                        <input type='text' placeholder='username'></input><br></br>
                        <input type='password' placeholder='password'></input><br></br>
                        <input type='checkbox'></input>
                        <label>Lorem impusm for sd afasdfsdf aw ejpwas</label>
                        <br></br>
                        <button>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='login-img-container'>
            <img src={logoImg} alt='Usuario'></img>
        </div>
    </div>
    )
}

export default Login