import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function BlogPage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Blog">
                <section className="blog-grid pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6 mb-7">
                            <div className="col-12">
                                <div className="pricing-title text-center mb-6">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        Blog & News
                                    </div>
                                    <h2 className="stitle mb-3">
                                        Latest <span className="fw-400">Insights</span>
                                        <span className="d-block fw-semibold">
                                            from Our Experts
                                        </span>
                                    </h2>
                                    <p className="pra-clr mx-auto" style={{ maxWidth: 720 }}>
                                        Discover articles, case studies, and updates crafted for business leaders, digital teams, and growth-focused companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-4">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog1.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Transforming Challenges into
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog2.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Design Inspiration Where to Find
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog3.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Creating new working in the digital
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog4.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Business meeting San Francisco
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog5.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Free advertising for your online
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/blog/mblog6.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="bspan-clr">MARCH 24, 2024</span>
                                        </div>
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                                Creating new working in the digital
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
