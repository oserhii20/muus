import React from "react"
import Header from "../components/layouts/Header"

export default function Teams() {
    return (
        <>
            <div className="MUUS_inner">
                <Header />
                <section className="MUUS_inner_team">
                    <div className="container">
                        <div className="MUUS_team_section">
                            <h2>Our team</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Auctor viverra tellus lobortis turpis ullamcorper. In sociis a viverra faucibus sit sit molestie.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team1.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>jacob<br />
                                        fischer</h4>
                                        <h6>Founder & Chief Executive Officer</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team3.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Missy<br />
                                        Rentz</h4>
                                        <h6>Chief Marketing Officer</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team4.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Christian<br />
                                        Meiley</h4>
                                        <h6>Chief Operations Officer</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team5.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Christian<br />
                                        Cardenas</h4>
                                        <h6>Tech Lead</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team6.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Wnxian<br />
                                        Shi</h4>
                                        <h6>Art Director</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="UUS_inner_team_member_img">
                                        <img src="images/team7.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Sam<br />
                                        Wooz</h4>
                                        <h6>Director of Photography</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="MUUS_inner_team_member">
                                    <div className="MUUS_inner_team_member_img">
                                        <img src="images/team8.png" />
                                    </div>
                                    <div className="MUUS_inner_team_member_text">
                                        <h4>Grant<br />
                                        Gadbois</h4>
                                        <h6>Post Production Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="MUUS_jointeam">
                <div className="container">
                    <div className="col-md-12">
                        <img src="images/mark.png" />
                        <h3>interested in an exciting career?</h3>
                        <h2>Join out team</h2>
                        <a href="">See Opening Jobs</a>
                    </div>
                </div>
            </section>
            <section className="MUUS_lets_work">
                <div className="container">
                    <div className="MUUS_lets_work_box">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="MUUS_lets_work_text">
                                    <h2>Let's Work Together </h2>
                                    <a href="">Get In Touch</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="MUUS_lets_work_img">
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