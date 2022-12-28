import React, { useContext,useState } from 'react';
import navBar from '../assets/banner.png';
import navBarLogo from '../assets/banner logo.png';
import navBarText from '../assets/banner text.png';
import bgText from '../assets/bg text.png';
import bgLogo from '../assets/bg logo.png';
import Disconnect from '../assets/disconnect.png';
import { ethers } from "ethers";
import { Context } from '../App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './SimpleSlider';

const Home = () => {
    
    const [connected,setConnected,address,setAddress] = useContext(Context);
    function onDisconnect(){
        setConnected(false);
    }

return(
    
    <>
    <div className='Home'>

        <div className='Header'>
            <img className='navBar' src={navBar}/>
            <div className='navBarComponent'>
                <img className='navBarLogo' src={navBarLogo}/>
                <img style={{width:"200px",top:"30px",position:"absolute"}} className='navBarLogo' src={navBarText}/>
                <img onClick={()=>{onDisconnect()}} className='disconnectBtn' src={Disconnect}/>
            </div>
            <img onClick={()=>{onDisconnect()}} className='disconnectBtnResponsive' src={Disconnect}/>
        </div>

        <div className='Body'>
            <div className='sliderDiv'>
                <center><SimpleSlider/></center>
            </div>
        </div>

        </div>

</>
    )
}

export default Home;