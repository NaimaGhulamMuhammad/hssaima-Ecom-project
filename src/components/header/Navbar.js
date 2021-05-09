import React from "react";
import MegaMenuImg from "../../images/megamenu-bg1.jpg"
import MegaMenuImg2 from "../../images/megamenu-bg1.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="row">
            <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center hidearrow">
                    <li className="lvl1 "><Link to="/">New In <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1 "><Link to="/">Sale <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1 parent megamenu"><Link to="/">Abayas <i className="anm anm-angle-down-l"></i></Link>
                        <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Colored Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Casual Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Embroidered Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Evening Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Work Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Floral Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Pocket Abayas</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">Abaya Sets</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">1988 LINE</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">21LABEL</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABATI DUBAI STTROPEZ</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABAYA AND HIJAAB</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ACACIA</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AH.ABAYA_</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AHLAM FASHION</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALIGN</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ANANLINE</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AND SULAIMANI</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ASHI.COLLECTIONS</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AURORA</Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 parent megamenu"><Link to="/">Kaftans <i className="anm anm-angle-down-l"></i></Link>
                        <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MODERN KAFTANS                </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MOROCCAN KAFTANS              </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FLORAL {'&'} PATTERN KAFTANS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">EVENING KAFTANS               </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">JUNIOR KAFTANS                </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">TRADITIONAL KAFTANS           </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">KAFTANS WITH POCKETS          </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">RAMADAN KAFTANS               </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b>                      </Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">12BUTTONS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">1988 LINE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABAYA AND HIJAAB  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ACACIA  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AHLAM FASHION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AL GHANADEER  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALIGN  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALJAMEELA  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALJAMEELA COLLECTION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AMINA ALAMRI  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BEENAS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BY AK DESIGNS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 parent megamenu"><Link to="/">Travel Wear <i className="anm anm-angle-down-l"></i></Link>
                    <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MODEST TRAVEL WEAR  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">TRAVEL WEAR SET  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">TRAVEL BLOUSE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">SUMMER TRAVEL WEAR  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">TRAVEL SKIRT  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">WINTER TRAVEL SET  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">TRAVEL JUMPSUIT  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b>                      </Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">1988 LINE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABATI DUBAI STTROPEZ  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ACACIA  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AHLAM FASHION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALIGN  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AMINA ALAMRI  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BLANC 8.3  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">CLOTHES TALK  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">CODE 9  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FMM DUBAI  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">HASH  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">INSPIRATION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 parent megamenu"><Link to="/">Dresses <i className="anm anm-angle-down-l"></i></Link>
                    <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MODEST DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">UNDER ABAYAS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">EVENING DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FLORAL DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">SLEEVELESS DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">POCKET DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MAXI DRESSES  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b>                      </Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">12BUTTONS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">1988 LINE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABAYA AND HIJAAB  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ACACIA  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AHLAM FASHION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ALJAMEELA COLLECTION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">AND SULAIMANI  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BEENAS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BLANC 8.3  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BY AMAL  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">BY REEM  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">CHICATIQUE COLLECTION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 "><Link to="/">Headscarf <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1 "><Link to="/">Bags <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1 parent megamenu"><Link to="/">Perfumes <i className="anm anm-angle-down-l"></i></Link>
                    <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">DEHN OUD  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ARABIC FRAGRANCE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ARABIC OUD  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FRAGRANCE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b>                      </Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ASHI.COLLECTIONS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">HANOUNY BY HANNAH  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">KHANEEN  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">NAQSH DESIGNS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ROUH ALOUD  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">THE OUD EDITION  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 parent megamenu"><Link to="/">Accessories <i className="anm anm-angle-down-l"></i></Link>
                    <div className="megamenu style1">
                            <ul className="grid grid--uniform mmWrapper">
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Category</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">HEADSCARF              </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FASHION JEWELLERY              </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b>                      </Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="/" className="site-nav lvl-1">Shop by Brand</Link>
                                    <ul className="subLinks">
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">35 BURGUNDY  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABAYA AND HIJAAB  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ABEER ALSALMAN  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">ANNI TERIANI  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">FORAVA  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">HANOUNY BY HANNAH  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">JAMELOO  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">JANINAJONEE  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">MERAKI COLLECTIONS  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">SHEHNA HUSSAIN  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2">THE SHEILA BOX  </Link></li>
                                        <li className="lvl-2"><Link to="/" className="site-nav lvl-2"><b>View All</b></Link></li>

                                    </ul>
                                </li>
                                <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                    <Link to="/"><img src={MegaMenuImg} alt="" title="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lvl1 "><Link to="/">Juniors <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1 "><Link to="/">Boutiques <i className="anm anm-angle-down-l"></i></Link></li>
                    <li className="lvl1"><Link to="/">Wardrobe <i className="anm anm-angle-down-l"></i></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar