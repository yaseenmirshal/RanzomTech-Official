
import Link from "next/link"

export default function Offer1() {
    return (
        <>

            <section className="offer-sectionv02 pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-3 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                                What <span className="fw-400">We Can Do for</span>
                                <span className="d-block fw-bold">
                                    Our Clients
                                </span>
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            view all service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/webicon.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Web Development
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    Conversion. Speed. Going forward, a modern website built for growth, designed to perform and scale
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={700}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/nfc.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        02
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        NFC Solution 
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    Smart. Going forward, NFC solutions that connect customers to your brand with one tap, fast and seamless
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/content.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        03
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Digital Marketing 
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    Growth. A marketing system built to attract attention, generate leads, and grow your business consistently
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/crm.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        04
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        CRM Solution 
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    CRM solutions to manage leads, customers, and follow-ups, keeping your business organized and scalable
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/uxui.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        05
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                       UX/UI Design
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    Design. Experience. Clean UI/UX crafted for modern brands, focused on clarity, trust, and conversions.
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img className="p-1" src="/assets/img/element/ai.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        06
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                       Ai Integration
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                    Automation. AI integration that saves time, improves workflows, and delivers smarter business operations
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
