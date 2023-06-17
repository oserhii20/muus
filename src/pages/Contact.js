import React from "react"
import Header from "../components/layouts/Header"

export default function Contact() {
    return (
        <>
            <div className="MUUS_contact_main">
                <Header />
                <section className="MUUS_inner_about">
                    <div className="container">
                        <div className="MUUS_about_section">
                            <h2>contact us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Auctor viverra tellus lobortis turpis ullamcorper. In sociis a viverra faucibus sit sit molestie.</p>
                        </div>
                        <div className="MUUS_inner_conr">
                            <div className="row align-items-center  ">
                                <div className=" col-lg-7">
                                    <div className="MUUS_inner_contact">
                                        <h3>Get a free quote now</h3>
                                        <form>
                                            <div className="MUUS_forminput">
                                                <input type="text" name="" placeholder="Name" />
                                            </div>
                                            <div className="MUUS_forminput">
                                                <input type="email" name="" placeholder="Email" />
                                            </div>
                                            <div className="MUUS_forminput">
                                                <input type="text" name="" placeholder="Subject" />
                                            </div>
                                            <div className="MUUS_forminput">
                                                <textarea placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="MUUS_forminput">
                                                <button>Sent Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className=" col-lg-5">
                                    <div className="MUUS_inner_conatct_text">
                                        <div className="MUUS_conatct_Company">
                                            <span><img src="images/call.png" /></span>
                                            <h4>Phone</h4>
                                            <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                                            <a href="tel:">(123) 456 7890</a>
                                        </div>
                                        <div className="MUUS_conatct_Company">
                                            <span><img src="images/mail.png" /></span>
                                            <h4>Email</h4>
                                            <p>Our support team will get back to in 48-h during standard business hours.</p>
                                            <a href="mailto:example@gmail.com">mailto:example@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="MUUS_ceontac-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.0090267587616!2d-118.35606558282156!3d34.043703997505034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b906e2aba4a9%3A0xadcc74ec6700390d!2s1846%20S%20Cochran%20Ave%2C%20Los%20Angeles%2C%20CA%2090019%2C%20USA!5e0!3m2!1sen!2snl!4v1686748044107!5m2!1sen!2snl" width="100%" height="600" style={{ border:0 }} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="MUUS_letsabout_work black-lettalk">
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