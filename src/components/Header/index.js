import React from "react";
import "./header.css"

function Header({count,setCount}) {
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <h1>logo</h1>
                        <nav>
                            <a href=''>Home</a>
                            <a href=''>contact</a>
                            <a href=''>about </a>
                        </nav>
                        <button onClick={() => setCount(!count)}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;