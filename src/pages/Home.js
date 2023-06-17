import React from "react"
import Header from "../components/layouts/Header"

export default function Home() {
    return (
        <>
            <div className="MUUS_Main">
                <Header />
                <div className="MUUS_banner">
                    <div className="MUUS_banner_form">
                        <video autoPlay muted loop>
                            <source src="videos/introduce.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <section className="MUUS_logo_slider">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="item"><img src="images/logo1.png" /></div>
                    </div>
                    <div className="item">
                        <div className="item"><img src="images/logo2.png" /></div>
                    </div>
                    <div className="item">
                        <div className="item"><img src="images/logo3.png" /></div>
                    </div>
                    <div className="item">
                        <div className="item"><img src="images/logo4.png" /></div>
                    </div>
                    <div className="item">
                        <div className="item"><img src="images/logo5.png" /></div>
                    </div>
                </div>
            </section>
            <section className="MUUS_Mission">
                <div className="container">
                    <h2>our mission</h2>
                    <p>MUUS' mission is to create innovative digital experiences and impactful storytelling through the fusion of
                        creativity and technology. Their values include collaboration, data-driven decision-making, and being a trusted
                        partner to their clients.</p>
                </div>
            </section>
            <section className="MUUS_work">
                <div className="container">
                    <div className="MUUS_work_studies">
                        <h2>our work</h2>
                        <a href="">all case studies</a>
                    </div>
                    <div className="MUUS_work_section">
                        <div className="owl-carousel owl-ourwork">
                            <div className="item">
                                <div className="MUUS_work_box">
                                    <img src="images/content.png" />

                                        <div className="MUUS_work_text">
                                            <span>Saint Cloud
                                                march 2023
                                            </span>
                                            <a href="">view</a>
                                        </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="MUUS_work_box">
                                    <img src="images/content.png" />

                                        <div className="MUUS_work_text">
                                            <span>Saint Cloud
                                                march 2023
                                            </span>
                                            <a href="">view</a>
                                        </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="MUUS_work_box">
                                    <img src="images/content.png" />

                                        <div className="MUUS_work_text">
                                            <span>Saint Cloud
                                                march 2023
                                            </span>
                                            <a href="">view</a>
                                        </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="MUUS_work_box">
                                    <img src="images/content.png" />

                                        <div className="MUUS_work_text">
                                            <span>Saint Cloud
                                                march 2023
                                            </span>
                                            <a href="">view</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="MUUS_services">
                <div className="container">
                    <div className="MUUS_work_services">
                        <h3>our services</h3>

                        <div className="MUUS_accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Branding and Identity
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Creative Direction
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Art Direction
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Graphic Design
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Web Design and Development
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            User Experience Design
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="MUUS_team">
                <div className="container">
                    <div className="MUUS_team_section">
                        <h2>Our team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Auctor viverra tellus lobortis turpis ullamcorper. In sociis a
                            viverra faucibus sit sit molestie.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team1.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>jacob<br />
                                        fischer</h4>
                                    <h6>Founder & Chief Executive
                                        Officer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team3.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Missy<br />
                                        Rentz</h4>
                                    <h6>Chief Marketing Officer</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team4.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Christian<br />
                                        Meiley</h4>
                                    <h6>Chief Operations Officer</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team5.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Christian<br />
                                        Cardenas</h4>
                                    <h6>Tech Lead</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team6.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Wnxian<br />
                                        Shi</h4>
                                    <h6>Art Director</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team7.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Sam<br />
                                        Wooz</h4>
                                    <h6>Director of Photography</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="MUUS_team_member">
                                <div className="MUUS_team_member_img">
                                    <img src="images/team8.png" />
                                </div>

                                <div className="MUUS_team_member_text">
                                    <h4>Grant<br />
                                        Gadbois</h4>
                                    <h6>Post Production Manager</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="MUUS_let_work">
                <div className="container">
                    <div className="MUUS_let_work_box">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="MUUS_let_work_text">
                                <h2>Let's Work Together </h2>
                                <a href="">Get In Touch</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="MUUS_let_work_img">
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