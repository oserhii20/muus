import React from "react"
import Header from "../components/layouts/Header"

export default function About() {
    return (
        <>
            <div className="MUUS_about_main">
                <Header />
                <section className="MUUS_inner_about">
                    <div className="container">
                        <div className="MUUS_about_section">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Auctor viverra tellus lobortis turpis ullamcorper. In sociis a viverra faucibus sit sit molestie.</p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className=" col-lg-6">
                                <div className="MUUS_inner_about_img">
                                    <img src="images/AB1I7801.png" />
                                </div>
                            </div>
                            <div className=" col-lg-6">
                                <div className="MUUS_inner_about_text">
                                    <h4>More About Company</h4>
                                    <h3>Marketing Your Business More Unique</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing italeo tellus, luctus nec mattis pulvinar dapibus leo. dolor sit amet, consectetur adipiscing elit. dkalk elit tellus, luctus nec mattis.</p>
                                    <p> consectetur adipiscing elit. dkalk elit tellus, luctus nec mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="MUUS_about_work">
                <div className="container">
                    <div className="col-md-12">
                        <h3>How We Work</h3>
                        <h2>Our Work Process</h2>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div className="MUUS_about_design">
                                <span><img src="images/D1.png" /> </span>
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur Auctor viverra tellus lobortis turpis ullam
                                rper. In sociis a viverra faucibus sit sit </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="MUUS_about_design">
                                <span><img src="images/D2.png" /> </span>
                                <h4>Branding</h4>
                                <p>Lorem ipsum dolor sit amet consectetur Auctor viverra tellus lobortis turpis ullam
                                rper. In sociis a viverra faucibus sit sit </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="MUUS_about_design">
                                <span><img src="images/D3.png" /> </span>
                                <h4>Marketing</h4>
                                <p>Lorem ipsum dolor sit amet consectetur Auctor viverra tellus lobortis turpis ullam
                                rper. In sociis a viverra faucibus sit sit </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="MUUS_letsabout_work">
                <div className="container">
                    <div className="MUUS_letsabout_work_box">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="MUUS_letsabout_work_text">
                                    <h2>Let's Work Together </h2>
                                    <a href="">Get In Touch</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="MUUS_letsabout_work_img">
                                    <img src="images/lettalk.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}