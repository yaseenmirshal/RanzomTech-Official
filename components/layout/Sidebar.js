import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>

            <div className={`subside-barmenu ${isSidebar ? "active" : ""}`}>
                <div className="remove-click d-flex justify-content-center align-items-center" onClick={handleSidebar}>
                    <i className="fas fa-times" />
                </div>
                
                <div className="sub-contact-wrapper d-grid">
                             {/* <Link href="/" className="brand-logo">
                                <img src="/assets/img/logo/logo.png" alt="logo" />
                            </Link> */}
                    <p>
                    RanzomTech is a modern digital agency providing high-quality websites, UI/UX design, e-commerce development, NFC solutions, AI integration, and digital marketing to help businesses grow faster and build a strong online presence.
                    </p>
                    <div className="sub-contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Address
                                </span>
                                <span className="textp">
                                    Kerala, India
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Email
                                </span>
                                <Link href="/javascript:void(0)" className="textp">
                                    info@ranzomtech.com
                                </Link>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Call now
                                </span>
                                <Link href="/jasacript:void(0)" className="textp">
                                    +91 95445 34677
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className="common-social pb-5  d-flex align-items-center gap-2">
  {/* Instagram */}
  <li data-aos="zoom-in-right" data-aos-duration={1400}>
    <a
      href="https://www.instagram.com/ranzomtech/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-center"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </li>

  {/* Facebook */}
  <li data-aos="zoom-in-right" data-aos-duration={1600}>
    <a
      href="https://www.facebook.com/profile.php?id=61573078530968"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-center"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
  </li>

  {/* WhatsApp */}
  <li data-aos="zoom-in-right" data-aos-duration={1800}>
    <a
      href="https://wa.me/919544534677"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-center"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  </li>

  {/* LinkedIn */}
  <li data-aos="zoom-in-right" data-aos-duration={1900}>
    <a
      href="https://www.linkedin.com/company/ranzomtech/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-center"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
  </li>
</ul>
                    <Link href="/contact" className="d-flex cmn-btn cmn-border justify-content-center fw-500 align-items-center gap-2 py-xl-3 py-2 px-2 rounded">
                        <span className="icons">
                            <i className="fas fa-arrow-up white" />
                        </span>
                        <span className="get-text">
                            Let's Talk
                        </span>
                    </Link>
                </div>
            </div>

        </>
    )
}
