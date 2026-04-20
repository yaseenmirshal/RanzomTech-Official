'use client'
import Layout from "@/components/layout/Layout"
import Pricing1 from "@/components/sections/Pricing1"
import Link from "next/link"
import { useState } from 'react'
export default function Service() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-section pt-space pb-space">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        WHAT WE OFFER
                                    </div>
                                    <h2 className="stitle">
                                        Most <span className="fw-400">experienced</span> services
                                    </h2>
                                </div>
                                <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                                    View All Service
                                    <span className="rot60 d-inline-block">
                                        <i className="fas fa-arrow-up theme-clr" />
                                    </span>
                                </Link>
                            </div>
                            {/*Service Tabing section*/}
                            <div className="row g-xxl-6 g-4">
                                <div className="service-tabing-wrap Faqs-section position-relative">
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 1 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(1)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        01
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/service-details" className="white-clr whitehover">
                                                            Web Development
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                        Conversion. Speed. Going forward, a modern website built for growth, designed to perform and scale with your business.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Portfolio
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-chevron-right" /> E-Commerce 
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> 3D Website
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> UX/UI Design
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/2.png" alt="imgweb" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 2 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(2)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        02
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/service-details" className="white-clr whitehover">
                                                            Lead Generaation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                        Growth. A marketing system built to attract attention, generate leads, and grow your business consistently
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Digital Marketing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Performance Marketing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Contaent creation
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> SEO Optimization
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/3.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 3 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(3)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        03
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/service-details" className="white-clr whitehover">
                                                            Ai Automation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                        Automation. AI integration that saves time, improves workflows, and delivers smarter business operations
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Automation Strategy
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> AI Integration
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> AI Chatbots
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> System Automation

                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/service/1.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            {/*Service Tabing section*/}
                        </div>
                    </section>
                    {/* Service m Tabs End */}
                    {/* Text SLider Start */}
                    <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15">
                        <div className="mycustom-marque">
                            <div className="scrolling-wrap">
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Text Slider End */}
                    {/* Pricing Plan Start */}
                    <Pricing1/>
                </div>

            </Layout>
        </>
    )
}