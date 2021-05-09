import React from 'react'
import PageTitle, {} from '../components/PageTitle'
import AboutUsContent from '../sections/AboutUsContent'
import AboutUsContact from '../sections/AboutUsContact'
import Footer from '../sections/Footer'

function AboutUs() {
    return (
        <>
            <PageTitle title='ABOUT US'/>
            <div className="container">
                <AboutUsContent/>
                <AboutUsContact/>
            </div>

          <Footer/>
            </>
        
    )
}

export default AboutUs
