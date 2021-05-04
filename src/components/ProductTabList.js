import React from "react";

const ProductTabList = () => {
  return (
    <div className="tabs-listing">
        <ul className="product-tabs">
          <li rel="tab1"><a className="tablink">Product Details</a></li>
          <li rel="tab2"><a className="tablink">Product Reviews</a></li>
          <li rel="tab3"><a className="tablink">Size Chart</a></li>
          <li rel="tab4"><a className="tablink">Shipping &amp; Returns</a></li>
        </ul>
        <div className="tab-container">
          <div id="tab1" className="tab-content">
            <div className="product-description rte">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                <li>Lorem Ipsum is not simply random text.</li>
                <li>Free theme updates</li>
              </ul>
              <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
              <p>You can change the position of any sections such as slider, banner, products, collection and so on by just dragging and dropping.&nbsp;</p>
              <h3>Lorem Ipsum is not simply random text.</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              <p>Change colors, fonts, banners, megamenus and more. Preview changes are live before saving them.</p>
              <h3>1914 translation by H. Rackham</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              <h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
              <p>You can use variant style from colors, images or variant images. Also available differnt type of design styles and size.</p>
              <h3>Lorem Ipsum is not simply random text.</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              <h3>Proin ut lacus eget elit molestie posuere.</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
          </div>
          <div id="tab2" className="tab-content">
            <div id="shopify-product-reviews">
              <div className="spr-container">
                <div className="spr-header clearfix">
                  <div className="spr-summary">
                    <span className="product-review"><a className="reviewLink"><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star-o" /><i className="font-13 fa fa-star-o" /> </a><span className="spr-summary-actions-togglereviews">Based on 6 reviews456</span></span>
                    <span className="spr-summary-actions">
                      <a href="#" className="spr-summary-actions-newreview btn">Write a review</a>
                    </span>
                  </div>
                </div>
                <div className="spr-content">
                  <div className="spr-form clearfix">
                    <form method="post" action="#" id="new-review-form" className="new-review-form">
                      <h3 className="spr-form-title">Write a review</h3>
                      <fieldset className="spr-form-contact">
                        <div className="spr-form-contact-name">
                          <label className="spr-form-label" htmlFor="review_author_10508262282">Name</label>
                          <input className="spr-form-input spr-form-input-text " id="review_author_10508262282" type="text" name="review[author]" defaultValue placeholder="Enter your name" />
                        </div>
                        <div className="spr-form-contact-email">
                          <label className="spr-form-label" htmlFor="review_email_10508262282">Email</label>
                          <input className="spr-form-input spr-form-input-email " id="review_email_10508262282" type="email" name="review[email]" defaultValue placeholder="john.smith@example.com" />
                        </div>
                      </fieldset>
                      <fieldset className="spr-form-review">
                        <div className="spr-form-review-rating">
                          <label className="spr-form-label">Rating</label>
                          <div className="spr-form-input spr-starrating">
                            <div className="product-review"><a className="reviewLink" href="#"><i className="fa fa-star-o" /><i className="font-13 fa fa-star-o" /><i className="font-13 fa fa-star-o" /><i className="font-13 fa fa-star-o" /><i className="font-13 fa fa-star-o" /></a></div>
                          </div>
                        </div>
                        <div className="spr-form-review-title">
                          <label className="spr-form-label" htmlFor="review_title_10508262282">Review Title</label>
                          <input className="spr-form-input spr-form-input-text " id="review_title_10508262282" type="text" name="review[title]" defaultValue placeholder="Give your review a title" />
                        </div>
                        <div className="spr-form-review-body">
                          <label className="spr-form-label" htmlFor="review_body_10508262282">Body of Review <span className="spr-form-review-body-charactersremaining">(1500)</span></label>
                          <div className="spr-form-input">
                            <textarea className="spr-form-input spr-form-input-textarea " id="review_body_10508262282" data-product-id={10508262282} name="review[body]" rows={10} placeholder="Write your comments here" defaultValue={""} />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="spr-form-actions">
                        <input type="submit" className="spr-button spr-button-primary button button-primary btn btn-primary" defaultValue="Submit Review" />
                      </fieldset>
                    </form>
                  </div>
                  <div className="spr-reviews">
                    <div className="spr-review">
                      <div className="spr-review-header">
                        <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /></span></span>
                        <h3 className="spr-review-header-title">Lorem ipsum dolor sit amet</h3>
                        <span className="spr-review-header-byline"><strong>dsacc</strong> on <strong>Apr 09, 2019</strong></span>
                      </div>
                      <div className="spr-review-content">
                        <p className="spr-review-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                    <div className="spr-review">
                      <div className="spr-review-header">
                        <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /></span></span>
                        <h3 className="spr-review-header-title">Lorem Ipsum is simply dummy text of the printing</h3>
                        <span className="spr-review-header-byline"><strong>larrydude</strong> on <strong>Dec 30, 2018</strong></span>
                      </div>
                      <div className="spr-review-content">
                        <p className="spr-review-content-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                      </div>
                    </div>
                    <div className="spr-review">
                      <div className="spr-review-header">
                        <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /><i className="font-13 fa fa-star" /></span></span>
                        <h3 className="spr-review-header-title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                        <span className="spr-review-header-byline"><strong>quoctri1905</strong> on <strong>Dec 30, 2018</strong></span>
                      </div>
                      <div className="spr-review-content">
                        <p className="spr-review-content-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.<br />
                          <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab3" className="tab-content">
            <h3>WOMEN'S BODY SIZING CHART</h3>
            <table>
              <tbody>
                <tr>
                  <th>Size</th>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                </tr>
                <tr>
                  <td>Chest</td>
                  <td>31" - 33"</td>
                  <td>33" - 35"</td>
                  <td>35" - 37"</td>
                  <td>37" - 39"</td>
                  <td>39" - 42"</td>
                </tr>
                <tr>
                  <td>Waist</td>
                  <td>24" - 26"</td>
                  <td>26" - 28"</td>
                  <td>28" - 30"</td>
                  <td>30" - 32"</td>
                  <td>32" - 35"</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>34" - 36"</td>
                  <td>36" - 38"</td>
                  <td>38" - 40"</td>
                  <td>40" - 42"</td>
                  <td>42" - 44"</td>
                </tr>
                <tr>
                  <td>Regular inseam</td>
                  <td>30"</td>
                  <td>30½"</td>
                  <td>31"</td>
                  <td>31½"</td>
                  <td>32"</td>
                </tr>
                <tr>
                  <td>Long (Tall) Inseam</td>
                  <td>31½"</td>
                  <td>32"</td>
                  <td>32½"</td>
                  <td>33"</td>
                  <td>33½"</td>
                </tr>
              </tbody>
            </table>
            <h3>MEN'S BODY SIZING CHART</h3>
            <table>
              <tbody>
                <tr>
                  <th>Size</th>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>XXL</th>
                </tr>
                <tr>
                  <td>Chest</td>
                  <td>33" - 36"</td>
                  <td>36" - 39"</td>
                  <td>39" - 41"</td>
                  <td>41" - 43"</td>
                  <td>43" - 46"</td>
                  <td>46" - 49"</td>
                </tr>
                <tr>
                  <td>Waist</td>
                  <td>27" - 30"</td>
                  <td>30" - 33"</td>
                  <td>33" - 35"</td>
                  <td>36" - 38"</td>
                  <td>38" - 42"</td>
                  <td>42" - 45"</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>33" - 36"</td>
                  <td>36" - 39"</td>
                  <td>39" - 41"</td>
                  <td>41" - 43"</td>
                  <td>43" - 46"</td>
                  <td>46" - 49"</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <img src="assets/images/size.jpg" alt="" />
            </div>
          </div>
          <div id="tab4" className="tab-content">
            <h4>Returns Policy</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
            <h4>Shipping</h4>
            <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus.  Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
          </div>
        </div>
      </div>
  )
}

export default ProductTabList