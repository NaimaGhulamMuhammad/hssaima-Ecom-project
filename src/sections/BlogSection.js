import React from 'react'
import PostCard from '../components/PostCard'
import data from '../data/blog'

function BlogSection() {
    return (
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                <div className="custom-search">
                    <form action="http://annimexweb.com/search" method="get" className="input-group search-header search" role="search" style={{ position: 'relative' }}>
                        <input className="search-header__input search__input input-group__field" type="search" name="q" placeholder="Search" aria-label="Search" autoComplete="off" />
                        <span className="input-group__btn"><button className="btnSearch" type="submit"> <i className="icon anm anm-search-l" /> </button></span>
                    </form>
                </div>
                <div className="blog--list-view">
                    <div className="row" >
                        {data.map((post) => {
                            const { img, title, user, date, para } = post;
                            return(
                              <PostCard img={img} title={title} user={user} date={date} para={para}/>
                              )
                        })}
                        

                  </div>
                  <hr/>
                        <div class="pagination">
                            <ul>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li class="next"><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i></a></li>
                            </ul>
                    	</div>
                </div>
              </div>

    )
}

export default BlogSection
