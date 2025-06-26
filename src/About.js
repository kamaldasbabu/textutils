import React, { useState } from "react";


export default function About() {

    const [ customCss, setCss] = useState({ color: "#000000", background:"#ffffff" });
    const [ btnName, setBtnName] = useState("Light Theme");

    const toggleBtn = () => {
        if(customCss.color === '#000000'){
            setCss({ color: "#ffffff", background:"#000000" });
            setBtnName("Light Theme");
        } else {
            setCss({ color: "#000000", background:"#ffffff" });
            setBtnName("Dark Theme");
        }

    }

    return (
        <>

            <div className="page-content" style={customCss}>
                <div className="block-title">Welcome to Framework7</div>
                <div className="block block-strong">
                    </div>
            </div>

            <button className="btn btn-primary" onClick={toggleBtn} >{btnName} </button>
        </>
    )
}