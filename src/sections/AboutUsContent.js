import React from 'react'
import About from '../data/Aboutus'
import AboutusPostCard from '../sections/AboutusPostCard'
import data from '../data/Aboutus'

function AboutUsContent(img) {
    return (
        <>
        <div class="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                <div className="text-center mb-4">
                    <h2 className="h2">Belle Multipurpose Bootstrap 4 Html Template</h2>
                    <div className="rte-setting">
                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong></p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </div>
            </div>
        </div>

            <div className='row'>
                {data.map((post) => {
                    const { img } = post;
                    return (
                        <AboutusPostCard img={img} />
                    )
                })}
            </div>

             <div class="row">
            <div className="col-12">
                <h2>Sed ut perspiciatis unde omnis iste natus error</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain.</p>
                <p>simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                <p />
            </div>

            </div>




        </>
    )
}

export default AboutUsContent
