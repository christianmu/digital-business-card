import React from "react"

export default function Info() {
    return (
        <div className="rectangle rectangle--info">
            <img src="./images/addy-pura-unsplash.jpg" className="image-beach rectangle--info" />
            <h1>Max Mustermann</h1>
            <h3>Frontend Developer</h3>
            <a href="#">mustermann.website</a>
            <div className="buttons--info">
                <a href="#"><img src="../images/email_button.png" /></a>
                <a href="#"><img src="../images/linkedin_button.png" /></a>
            </div>
        </div>
    )
}