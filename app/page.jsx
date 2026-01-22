import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Hero3 from "@/components/sections/Hero3"
import Offer1 from "@/components/sections/Offer1"
import Pricing1 from "@/components/sections/Pricing1"
import Team3 from "@/components/sections/Team3"
import TextSLider3 from "@/components/sections/TextSLider3"

export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero3 />
                    
                    <Offer1/>
                    <About2/>
                    <Pricing1/>
                    <Team3/>
                   
                    
                    
                    {/* <Product1 /> */}
                    {/* <Service1 /> */}
                    {/* <TextSLider1 /> */}
                    {/* <CaseStudy1 /> */}
                    {/* <Watch1 /> */}
                    {/* <Team1 /> */}
                    {/* <TextSLider2 /> */}
                    {/* <Testimonial1 /> */}
                    {/* <Blog1 /> */}
                    <TextSLider3 />
                </div>
            </Layout>
        </>
    )
}