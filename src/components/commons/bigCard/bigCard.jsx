import React from "react"

import ProgressCircle from "../ProgressCircle"
import BigDataTop from "../bigCardTop/bigCardTop"
import "./bigCard.css"


export default function bigCard(params) {

    return(
    <div className="bigCard">
        <BigDataTop />
    <ProgressCircle/>
    </div>)
    
}