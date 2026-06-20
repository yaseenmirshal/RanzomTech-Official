'use client'

import Layout from '@/components/layout/Layout'
import AuthForm from '@/components/elements/AuthForm'

export default function SignupPage() {
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Sign Up">
      <section className="contact-section pt-space pb-space">
        <div className="container">
          <div className="row g-xl-7 g-4 mb-xxl-7 mb-6 justify-content-center">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
              <AuthForm mode="signup" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
