import Link from "next/link";

export default function Blog3() {
  return (
    <>
      <section className="home-blog-version1 bg1-clr pt-space pb-space">
        <div className="container zindex position-relative">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
            <div className="pricing-title">
              <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                BLOGS
              </div>
              <h2 className="stitle">
                Insights & <span className="fw-400">Innovation</span>
                <span className="d-block fw-semibold">
                  From Our Experts
                </span>
              </h2>
            </div>

            <Link
              href="/blog-grid"
              className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2"
            >
              View All Articles
              <span className="rot60 d-inline-block">
                <i className="fas fa-arrow-up theme-clr" />
              </span>
            </Link>
          </div>

          <div className="row g-xxl-7 g-xl-6 g-4">
            {/* Featured Blog */}
            <div className="col-lg-6 col-md-6">
              <div className="blog-widget-item">
                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                  <img
                    src="https://xstarnextjs.vercel.app/assets/img/blog/blogv3-big.png"
                    alt="Web Development Trends"
                    className="w-100 overflow-hidden"
                  />
                </div>

                <div className="blog-cont">
                  <h5 className="mb-xxl-7 mb-xl-5 mb-4">
                    <Link href="/blog-details" className="white-clr">
                      Top Web Development Trends Businesses Should Watch in 2026
                    </Link>
                  </h5>

                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      Web Development
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>

                    <span className="bspan-clr">
                      JUNE 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog List */}
            <div className="col-lg-6 col-md-6">
              <div className="blog-content-wrapperv3 ps-xxl-15 pt-md-0 pt-5">

                {/* Blog 1 */}
                <div className="blog-v3-inner bb-border pb-xxl-6 pb-5">
                  <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                    <Link href="/blog-details" className="white-clr">
                      Why Every Business Needs a Professional Website in 2026
                    </Link>
                  </h5>

                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      Business Growth
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>

                    <span className="bspan-clr">
                      MAY 2026
                    </span>
                  </div>

                  <Link href="/blog-details" className="blog-hover">
                    <img
                      src="https://i.pinimg.com/736x/34/15/ed/3415edab0e6a59f30a953a92af57195e.jpg"
                      alt="Business Website"
                    />
                  </Link>
                </div>

                {/* Blog 2 */}
                <div className="blog-v3-inner bb-border pb-xxl-6 pb-5 pt-xxl-6 pt-5">
                  <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                    <Link href="/blog-details" className="white-clr">
                      How UI/UX Design Impacts Customer Trust and Conversions
                    </Link>
                  </h5>

                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      UI/UX Design
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>

                    <span className="bspan-clr">
                      APRIL 2026
                    </span>
                  </div>

                  <Link href="/blog-details" className="blog-hover">
                    <img
                      src="https://i.pinimg.com/1200x/09/25/82/09258251e0b385ba42eca7d442386f71.jpg"
                      alt="UI UX Design"
                    />
                  </Link>
                </div>

                {/* Blog 3 */}
                <div className="blog-v3-inner pt-xxl-6 pt-5">
                  <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                    <Link href="/blog-details" className="white-clr">
                      Digital Marketing Strategies to Scale Your Business Online
                    </Link>
                  </h5>

                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      Digital Marketing
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>

                    <span className="bspan-clr">
                      MARCH 2026
                    </span>
                  </div>

                  <Link href="/blog-details" className="blog-hover">
                    <img
                      src="https://i.pinimg.com/736x/1d/17/8f/1d178f0dfec9fc57d0b31b180bcb6d6e.jpg"
                      alt="Digital Marketing"
                    />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}