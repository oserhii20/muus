import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState("/")

    useEffect(() => {
        if (location && location.pathname) {
            setCurrentPath(location.pathname)
        }
    }, [location])

    return (
        <div className="container">
            <header className="MUUS_home-header">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={(currentPath == "/" || currentPath == "/teams" || currentPath == "/contact") ? "images/Logo.png" : "images/black_logo.png"} /></a>
                        <button className={`navbar-toggler ${(currentPath == "/" || currentPath == "/teams" || currentPath == "/contact") ? "black-theme" : "white-theme"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  " id="collapsibleNavbar">
                            <ul className="navbar-nav  ml-auto   mt-lg-0 nav-rot">
                                <li className={`nav-item pink ${currentPath == "/" ? "active" : ""}`}>
                                    <a className="nav-link" href="/">home</a>
                                </li>
                                <li className={`nav-item ${currentPath == "/services" ? "active" : ""}`}>
                                    <a className="nav-link" href="/services">services</a>
                                </li>
                                <li className={`nav-item ${currentPath == "/work" ? "active" : ""}`}>
                                    <a className="nav-link" href="/work">work</a>
                                </li>
                                <li className={`nav-item pink ${currentPath == "/teams" ? "active" : ""}`}>
                                    <a className="nav-link" href="/teams">team</a>
                                </li>
                                <li className={`nav-item ${currentPath == "/contact" ? "active pink" : ""}`}>
                                    <a className="nav-link" href="/contact">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}