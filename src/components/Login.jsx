import React, { useContext,useState } from 'react';
import navBar from '../assets/banner.png';
import navBarLogo from '../assets/banner logo.png';
import navBarText from '../assets/banner text.png';
import bgText from '../assets/bg text.png';
import bgLogo from '../assets/bg logo.png';
import Connect from '../assets/connect button.png';
import { ethers } from "ethers";
import { Context } from '../App';

const Login = () => {
    
    const [show,setShow] = useState(false)

    const [connected,setConnected,address,setAddress] = useContext(Context);

    function metamaskAlert(){
        setShow(true);
        setTimeout(()=>{
            setShow(false);
        },1500);
    }

    async function onConnect()
    {
        if(!window.ethereum){
            metamaskAlert()
        }
        else{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        if(!connected){
            const response = await provider.send("eth_requestAccounts",[])
            console.log(response)
            // const signer = provider.getSigner()
            if(response.length === 0){
                setConnected(false)
                
            }
            else{
                setConnected(true)
                setAddress(response[0])
                // props.callback(provider,response[0])
                }
            }
        }
    }

    function onDisconnect(){
        setConnected(false);
    }

return(
    
    <>
    <div className='Login'>

        <div className='Header'>
            <img className='navBar' src={navBar}/>
            <div className='navBarComponent'>
                <img className='navBarLogo' src={navBarLogo}/>
                <img style={{width:"200px",top:"30px",position:"absolute"}} className='navBarLogo' src={navBarText}/>
            </div>
        </div>

        <div className='Body'>
            <div className='bgTextLogo'>
             <img className='loginBodyLogo' src={bgText}/>
             <img className='loginBodyLogo'  src={bgLogo}/>
            </div>
            <img onClick={()=>{onConnect()}} className='connectBtn' src={Connect}/>
        </div>

        </div>

</>
    )
}

export default Login;