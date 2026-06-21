

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 20,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
    },
}

export default function Testimonial3() {
    return (
        <>

            <section className="testimonial-version02-section pb-space position-relative">
                <div className="container position-relative">
                    <div className="swiper testimonial-version03 position-relative">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/446211657_438136228827600_7714114579884112167_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=mRoxJhOCL5kQ7kNvwGur1tX&_nc_oc=AdqNC_gHrci5BRcWrVDNuNMXjzcBxGwGXJ6zxdXqtuIe4YVdYO0V9SHXHGZn_3tTTSY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b6a8&oh=00_Af9uLMt7JjLahmfq_EaZIhkmVNzXR8CmeL1EzjqHD2VhgQ&oe=6A3D535E" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Alishan Gafoor
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                   Accountant
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                        RanzomTech  developed the Jaza Perfumes e-commerce website with a 
                                        clean UI and smooth UX. The site feels premium, loads fast, and the
                                         full shopping flow is perfectly optimized.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/client/irshad.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Irshad Maazank
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Interior Designer
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            We successfully launched premium websites for Daam Bath Fittings and 
                                            GDOT Non Woven Bags. Along with the websites, they also provided NFC cards
                                             to enhance our business presence.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Arshad
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Manager @Stylicle
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                      Worked with RanzomTech to create a website for my salon business in
                                       Abu Dhabi, available in both English and Arabic. The result is a well 
                                       designed, business ready website that perfectly fits my needs.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-3.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Leslie Alexander
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Web Designer
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is
                                            porta pretium metus aliquam eget maecenas porta
                                            is nunc viverra Aenean.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
