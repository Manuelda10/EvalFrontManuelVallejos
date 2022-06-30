import React from 'react'
import logoImg from '../../assets/logo.png'
import homeImg from '../../assets/home.png'
import './index.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='content-info'>
                <div className='info'>
                    <div className='info-img-container'>
                        <img src={logoImg} alt='logo' ></img>
                    </div>
                    <h2>Siempre contigo</h2>
                    <h1>Siempre BPI</h1>
                    <p>Somos un grupo empresarial enfocado en la administración, ejecución y planeamiento estratégico de nuestras firmas, las cuales se diversifican en el sector inmobiliario y de tecnología, brindando soluciones inteligentes con un enfoque de desarrollo inclusivo para más peruanos</p>
                </div>
            </div>
            <div className='content-img'>
                <img src={homeImg} alt='home'></img>
            </div>
        </div>
    )
}

export default Home