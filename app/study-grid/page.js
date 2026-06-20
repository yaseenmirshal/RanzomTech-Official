
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function StudyGrid() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Case Study Grid">
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100  overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="https://mirshal.com/assets/images/jazaweb.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center  gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="https://jazaperfumes.com/" target="_blank" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Website
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link> 
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                A Perfume Brand Jaza Perfumes
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="https://mirshal.com/assets/images/stylicleweb.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Website
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                A Salon Brand Stylicle in Abu Dhabi
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}