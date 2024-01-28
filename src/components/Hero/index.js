import React, { useState } from "react";
import "./hero.css"



function Hero() {
const [open, setOpen] = useState(false)
    return (
        <div>
            <div id="hero" >
                <div className="container">
                    <div className="hero">


                       <button className="hero-btn" onClick={() => setOpen(!open)}>✌️</button> 
                       <div className="hero-modal"
                       style={{
                        display: open ? "none" : "block"
                       }}>
                        <div>
                        <button className="btn1" onClick={() => setOpen(!open)}>X</button>
                       </div>
                       <input type=''></input>
                       <input type=''></input>
                       <button className="btn">click</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;