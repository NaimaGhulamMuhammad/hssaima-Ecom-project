import React from 'react'
import { Link } from 'react-router-dom'

function AboutUsContact() {
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                    <h2 className="h2">About Annimex Web</h2>
                    <div className="rte-setting"><p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong></p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p></div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="h2">Contact Us</h2>
                    <ul className="addressFooter">
                        <li><i className="icon anm anm-map-marker-al" /><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p></li>
                        <li className="phone"><i className="icon anm anm-phone-s" /><p>(440) 000 000 0000</p></li>
                        <li className="email"><i className="icon anm anm-envelope-l" /><p>sales@yousite.com</p></li>
                    </ul>
                    <hr />
                    <ul className="list--inline site-footer__social-icons social-icons">
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook" /></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter" /> <span className="icon__fallback-text">Twitter</span></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i className="icon icon-pinterest" /> <span className="icon__fallback-text">Pinterest</span></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram" /> <span className="icon__fallback-text">Instagram</span></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i className="icon icon-tumblr-alt" /> <span className="icon__fallback-text">Tumblr</span></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i className="icon icon-youtube" /> <span className="icon__fallback-text">YouTube</span></Link></li>
                        <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i className="icon icon-vimeo-alt" /> <span className="icon__fallback-text">Vimeo</span></Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default AboutUsContact
