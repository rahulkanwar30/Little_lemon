import React from "react"
import small_logo from "../Img/FooterLogo.png"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
            </div>
            <div>
                <h3>Links</h3>
            <ul>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">About</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 111 Yonge Street, Toronto, ON</li>
                <li>Phone: <br/> +1 888 555 5555</li>
                <li>Email: <br/> contact@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">X</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;