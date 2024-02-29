import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextConvertrer from './Components/TextConvertrer';
import Alert from './Components/Alert';

function App() {
  const[mode , setMode] = useState("light")

  const[alert , setAlert] = useState(null)

  function showalert(masg , type){
    setAlert({
      msg : masg ,
      type : type ,
    }
    )
    setTimeout(()=>{
     setAlert(null)
    },1800)
  }

  const [Theme  , setTheme]= useState({
    color:"black",
    backgroundColor :"white",
  })

  function changeTheme(){
    if(Theme.color === "black"){
      setTheme({
        color : "white",
        backgroundColor : "black", 
      })
      document.body.style.backgroundColor="black"  
      setMode("dark")
      showalert("Dark mode has been enabled" , "secondary")
    }
    else{
      setTheme({
        color : "black",
        backgroundColor : "white", 
      })
      document.body.style.backgroundColor="white" 
      setMode("light")
      showalert("Ligth mode has been enabled" , "dark")
    }
  
  }
   
  return (
    <>
    <Navbar name="Rajoriya" toogleMode={changeTheme} Mode={mode}></Navbar>
    <Alert Alert={alert}></Alert>
    <TextConvertrer theme={Theme} showAlert ={showalert}></TextConvertrer>
    </>
  )
}

export default App;
