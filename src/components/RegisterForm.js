import React from "react";

const RegisterForm = () => {
  return (
   <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
        <div className="mb-4">
          <form method="post" action="#" id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">	
            <div className="row">
	            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="FirstName">First Name</label>
                <input type="text" name="customer[first_name]" placeholder="" id="FirstName" autofocus="" />
              </div>
              </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="LastName">Last Name</label>
                <input type="text" name="customer[last_name]" placeholder="" id="LastName" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="CustomerEmail">Email</label>
                <input type="email" name="customer[email]" placeholder="" id="CustomerEmail" className="" autocorrect="off" autocapitalize="off" autofocus="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="CustomerPassword">Password</label>
                <input type="password" value="" name="customer[password]" placeholder="" id="CustomerPassword" className="" />                        	
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
            <input type="submit" className="btn mb-3" value="Create"/>
            </div>
          </div>
        </form>
                   
      </div>
    </div>
  </div>        
</div>
  )
}

export default RegisterForm