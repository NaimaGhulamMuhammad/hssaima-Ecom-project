import React from 'react'


function AboutusPostCard({img}) {
  
    return (
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 mb-4">
                <img class="blur-up lazyload" data-src={img} src={img} alt="About Us" />
            </div>
        
    )
}

export default AboutusPostCard
