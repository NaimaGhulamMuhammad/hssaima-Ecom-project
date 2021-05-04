import React from "react";

const PageTitle = ({title}) => {
  return (
   <div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">{title}</h1></div>
      		</div>
		</div>
  )
}

export default PageTitle