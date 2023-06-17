import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="MUUS-Footer">
                            <div className="MUUS_footer-logo">
                                <a href="/"><img src="images/Logo.png" /></a>
                            </div>
                            <div className="MUUS_footer-text">
                                <p>Sod utcrspis unde omris isto lano natus error voluem</p>
                                <ul className="MUUS_socilaicon">
                                    <li><a href=""><img src="images/Twitter.png" /></a></li>
                                    <li><a href=""><img src="images/f.png" /></a></li>
                                    <li><a href=""><img src="images/Instagram.png" /></a></li>

                                    <li><a href=""><img src="images/linked_in.png" /></a></li>
                                    <li><a href=""><img src="images/deco.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="MUUS_footer-nav">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/work">Work</a></li>
                                <li><a href="/teams">Team</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="MUUS_footer-nav">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="">Help center</a></li>
                                <li><a href="">Terms & Privacy</a></li>
                                <li><a href="">Feedback</a></li>
                                <li><a href="">Affiliate</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="MUUS_footer-Subscribe">
                            <h3>Subscribe</h3>
                            <span>Subscribe to our weekly newsletter</span>
                            <div className="MUUS_Subscribe_box">
                                <input type="type" placeholder="Enter Email" name="" />
                                <button><img src="images/arrow.png" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="MUUS_copyright">
                        <p>2023 | All right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}