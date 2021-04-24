import React from "react"
import Button from "../atoms/button"
import buttonData from "../atoms/buttonData"
import Navbar from "../organisms/navbar"
import Hero from "../organisms/hero"

function TestPage(){
    return(
        <div>
        <title>Test Page</title>
        <Navbar/>
        <Hero/>
        <Button key={buttonData[0].id} title={buttonData[0].title} link={buttonData[0].link}/>
        </div>
    )
}

export default TestPage