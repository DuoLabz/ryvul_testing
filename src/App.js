import React, { createContext,useState } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
export const Context = createContext(null)

function App() {
  const [connected,setConnected] = useState(false)
  const [address,setAddress] = useState('')
  return (
    <div className="App">
      <Context.Provider value={[connected,setConnected,address,setAddress]}>
      { connected?
      <Home/>
      :
      <Login/>
      }
      </Context.Provider>

    </div>
  );
}

export default App;
