import React from "react";
const ProductFeature = ({img,title,details}) => {
  return (
       <div className="prFeatures">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
            <img src={img} alt=:{title} title={title}/>
            <div className="details"><h3>{title}</h3>{details}</div>
          </div>
        </div>
      </div>
  )
}

export default ProductFeature