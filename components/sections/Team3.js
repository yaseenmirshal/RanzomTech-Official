'use client'
import Link from "next/link"
import { Tilt } from 'react-tilt'
const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function Team3() {
    return (
        <>

            <section className="team-staft pt-space pb-space position-relative">
                {/* <div className="team-staft-slidewrap pb-space">
                    <div className="digital-marketing mb-lg-0 mb-10">
                        <div className="comm">
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    01
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Web Development
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/web-design.webp" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    02
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                UI/UX Experience
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/uxui.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    03
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Digital Marketing
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/digital.jpg" alt="img" />
                                </span>
                            </div>
                        </div>
                        <div className="comm">
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    04
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Branding
                                <span className="digital-thumb">
                                    <img src="https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2025/10/Feature-image-Branding.png" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    05
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                UI/UX Experience
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/uxui.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    06
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Digital Marketing
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/digital.jpg" alt="img" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="digital-marketing text-slie-reverse">
                        <div className="comm">
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    01
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Ecommerce Solutions
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/e-commerce.png" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    02
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Ai Integration
                                <span className="digital-thumb">
                                    <img src="https://www.computerworld.com/wp-content/uploads/2025/11/3846150-0-19220000-1762336686-shutterstock_2577839733.jpg?quality=50&strip=all&w=1024" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    03
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                E-commerce
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/e-commerce.png" alt="img" />
                                </span>
                            </div>
                        </div>
                        <div className="comm">
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    04
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                NFC Solutions
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/nfc.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    05
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Mobile app
                                <span className="digital-thumb">
                                    <img src="/assets/img/service/tab1.png" alt="img" />
                                </span>
                            </div>
                            <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    06
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Creative Design
                                <span className="digital-thumb">
                                    <img src="https://img.freepik.com/free-psd/landing-page-template-creativity_23-2150139771.jpg?semt=ais_hybrid&w=740&q=80" alt="img" />
                                </span>
                            </div>
                             <div className="cmn-textslide d-grid position-relative">
                                <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                    06
                                    <span className="rot60 d-inline-block theme-clr">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </span>
                                Creative Design
                                <span className="digital-thumb">
                                    <img src="https://img.freepik.com/free-psd/landing-page-template-creativity_23-2150139771.jpg?semt=ais_hybrid&w=740&q=80" alt="img" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                oUR experts
                            </div>
                            <h2 className="stitle">
                                Meet our <span className="fw-400">Team</span> 
                            </h2>
                        </div>
                        <Link href="/service-details" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            view all teams
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-5 g-4 justify-content-center">
                        <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                <div className="thumb">
                                    <img src="/assets/img/team/2.png" alt="img" />
                                </div>
                                <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                    <h6 className="m-3 white-clr">
                                        Yaseen Mirshal
                                    </h6>
                                    <span className="pra-clr">
                                        CTO &amp; Founder
                                    </span>
                                </div>
                                       <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
    <li>
        <Link href="https://wa.me/919947234099`" target="_blank">
            <i
                className="fab fa-whatsapp"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://linkedin.com/in/yaseenmirshal" target="_blank">
            <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://instagram.com/yaseen_mirshal" target="_blank">
            <i
                className="fab fa-instagram"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://facebook.com/yaseenmirshal" target="_blank">
            <i
                className="fab fa-facebook-f"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>
</ul>
                            </div>
                        </Tilt>

                         <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                <div className="thumb">
                                    <img src="/assets/img/team/ayisha.png" alt="img" />
                                </div>
                                <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                    <h6 className="m-3 white-clr">
                                        Ayisha Fabi
                                    </h6>
                                    <span className="pra-clr">
                                        Digital Strategist
                                    </span>
                                </div>
                              <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
    <li>
        <Link href="https://wa.me/919995964783" target="_blank">
            <i
                className="fab fa-whatsapp"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://linkedin.com/in/ayishafabi" target="_blank">
            <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://instagram.com/" target="_blank">
            <i
                className="fab fa-instagram"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://facebook.com/yourprofile">
            <i
                className="fab fa-facebook-f"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>
</ul>
                            </div>
                        </Tilt>
                        
                        

                        <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1800}>
                            <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                <div className="thumb">
                                    <img src="/assets/img/team/aqil.png" alt="img" />
                                </div>
                                <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                    <h6 className="m-3 white-clr">
                                        Aqil Rasheed
                                    </h6>
                                    <span className="pra-clr">
                                    Ai Developer
                                    </span>
                                </div>
                                       <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
    <li>
        <Link href="https://wa.me/917356074018" target="_blank">
            <i
                className="fab fa-whatsapp"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://linkedin.com/in/yourprofile">
            <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://instagram.com">
            <i
                className="fab fa-instagram"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://facebook.com/yourprofile">
            <i
                className="fab fa-facebook-f"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>
</ul>
                            </div>
                        </Tilt>

                        <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1800}>
                            <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                <div className="thumb">
                                    <img src="/assets/img/team/shamil.png" alt="img" />
                                </div>
                                <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                    <h6 className="m-3 white-clr">
                                        Shamil Gafoor
                                    </h6>
                                    <span className="pra-clr">
                                        Digital Marketing Executive 
                                    </span>
                                </div>
                                       <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
    <li>
        <Link href="https://wa.me/917736855117" target="_blank">
            <i
                className="fab fa-whatsapp"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://linkedin.com/in/yourprofile">
            <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://instagram.com/yourprofile">
            <i
                className="fab fa-instagram"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>

    <li>
        <Link href="https://facebook.com/yourprofile">
            <i
                className="fab fa-facebook-f"
                style={{ fontSize: "22px", color: "rgba(180,180,180,0.7)", transition: "0.3s" }}
                onMouseEnter={(e) => e.target.style.color = "#b7d63a"}
                onMouseLeave={(e) => e.target.style.color = "rgba(180,180,180,0.7)"}
            ></i>
        </Link>
    </li>
</ul>
                            </div>
                        </Tilt>

                        
                       
                    </div>

                    


                </div>

                
            </section>

            
        </>
    )
}
