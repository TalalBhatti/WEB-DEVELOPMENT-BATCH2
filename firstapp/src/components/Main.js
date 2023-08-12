import React, { useState } from "react";
import Logo from '../images/ncl-logo.jpg'

const Main = () =>{
    // let greetings = "Morning";
    const [greetings, setGreetings] = useState("Morning")

    setTimeout(()=>{
        // greetings = "Afternoon"
        setGreetings("Afternoon")
        console.log(greetings)
    },3000)

    return(
        <>
        <img
        src={Logo}
        style={{width:"200px"}}
        />
        <h5>Greeting: {greetings}</h5>
        </>
    )
}

export default Main