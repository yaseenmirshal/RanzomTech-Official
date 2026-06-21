import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog1 from "@/components/sections/Blog1"
import Blog2 from "@/components/sections/Blog2"
import Blog3 from "@/components/sections/Blog3"
import Blog4 from "@/components/sections/Blog4"
import CaseStudy2 from "@/components/sections/CaseStudy2"
import CaseStudy3 from "@/components/sections/CaseStudy3"
import Hero2 from "@/components/sections/Hero2"
import Hero3 from "@/components/sections/Hero3"
import Offer1 from "@/components/sections/Offer1"
import Pricing1 from "@/components/sections/Pricing1"
import Product1 from "@/components/sections/Product1"
import Team3 from "@/components/sections/Team3"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Testimonial3 from "@/components/sections/Testimonial3"
import Testimonial4 from "@/components/sections/Testimonial4"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"

export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero2 />
                    
                    <Offer1/>
                    <About2/>
                    <Pricing1/>
                    <TextSLider2 />
                    <Testimonial3/>
                    
                    <CaseStudy2/>
                   

                   
                    
                    
                    {/* <Product1 /> */}
                    {/* <Service1 /> */}
                    {/* <TextSLider1 /> */}
                    {/* <CaseStudy1 /> */}
                    {/* <Watch1 /> */}
                    {/* <Team1 /> */}
                    
                    {/* <Testimonial2/> */}
                    <Blog3/>
                     <Team3/>
                    <TextSLider3 />
                </div>
            </Layout>
        </>
    )
}