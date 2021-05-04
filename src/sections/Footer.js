import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
        <footer id="footer">
            <div class="newsletter-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-7 w-100 d-flex justify-content-start align-items-center">
                            <div class="display-table">
                                <div class="display-table-cell footer-newsletter">
                                    <div class="section-header text-center">
                                        <label class="h2"><span>sign up for </span>newsletter</label>
                                    </div>
                                    <form action="#" method="post">
                                        <div class="input-group">
                                            <input type="email" class="input-group__field newsletter__input" name="EMAIL" value="" placeholder="Email address" required="" />
                                            <span class="input-group__btn">
                                                <button type="submit" class="btn newsletter__submit" name="commit" id="Subscribe"><span class="newsletter__submit-text--large">Subscribe</span></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end align-items-center">
                            <div class="footer-social">
                                <ul class="list--inline site-footer__social-icons social-icons">
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i class="icon icon-facebook"></i></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i class="icon icon-twitter"></i> <span class="icon__fallback-text">Twitter</span></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i class="icon icon-pinterest"></i> <span class="icon__fallback-text">Pinterest</span></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i class="icon icon-instagram"></i> <span class="icon__fallback-text">Instagram</span></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i class="icon icon-tumblr-alt"></i> <span class="icon__fallback-text">Tumblr</span></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i class="icon icon-youtube"></i> <span class="icon__fallback-text">YouTube</span></Link></li>
                                    <li><Link class="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i class="icon icon-vimeo-alt"></i> <span class="icon__fallback-text">Vimeo</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            
            <div class="site-footer">
        	    <div class="container">
            	    <div class="footer-top">
                	    <div class="row">
                    	    <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                        	    <h4 class="h4">Quick Shop</h4>
                                <ul>
                            	    <li><Link to="#">Women</Link></li>
                                    <li><Link to="#">Men</Link></li>
                                    <li><Link to="#">Kids</Link></li>
                                    <li><Link to="#">Sportswear</Link></li>
                                    <li><Link to="#">Sale</Link></li>
                                </ul>
                            </div>
                            
                            <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                                <h4 class="h4">Informations</h4>
                                <ul>
                                    <li><Link to="#">About us</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Privacy policy</Link></li>
                                    <li><Link to="#">Terms &amp; condition</Link></li>
                                    <li><Link to="#">My Account</Link></li>
                                </ul>
                            </div>

                            <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                                <h4 class="h4">Customer Services</h4>
                                <ul>
                                    <li><Link to="#">Request Personal Data</Link></li>
                                    <li><Link to="#">FAQ's</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Orders and Returns</Link></li>
                                    <li><Link to="#">Support Center</Link></li>
                                </ul>
                            </div>

                            <div class="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                                <h4 class="h4">Contact Us</h4>
                                <ul class="addressFooter">
                                    <li><i class="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque,<br/>2568 steet, 23568 NY</p></li>
                                    <li class="phone"><i class="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                                    <li class="email"><i class="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="footer-bottom">
                	    <div class="row">
	                	    <div class="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"><span></span> <Link to="templateshub.net">Templates Hub</Link></div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                        	    <ul class="payment-icons list--inline">
                                    <li><i class="icon fa fa-cc-visa" aria-hidden="true"></i></li>
                                    <li><i class="icon fa fa-cc-mastercard" aria-hidden="true"></i></li>
                                    <li><i class="icon fa fa-cc-discover" aria-hidden="true"></i></li>
                                    <li><i class="icon fa fa-cc-paypal" aria-hidden="true"></i></li>
                                    <li><i class="icon fa fa-cc-amex" aria-hidden="true"></i></li>
                                    <li><i class="icon fa fa-credit-card" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <span id="site-scroll"><i class="icon anm anm-angle-up-r"></i></span>
    </>
    );
}
export default Footer;