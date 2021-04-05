import React from "react"
import Button from "../atoms/button"
import Navbar from "../organisms/navbar"

function TestPage(){
    return(
        <div>
        <title>Test Page</title>
        <h1 className="text-mmb-500 font-bold">This is my site!</h1>
        <Navbar/>
        <Button/>
        </div>
    )
}

export default TestPage