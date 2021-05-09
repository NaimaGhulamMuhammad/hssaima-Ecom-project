import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ img, title, user, para, date }) {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                {/* Article Image */}
                <Link className="article_featured-image" href="#"><img className="blur-up lazyload" data-src={img} src={img} alt={title} /></Link>
                <h2 className="h3"><Link href="blog-left-sidebar.html">{title}</Link></h2>
                <ul className="publish-detail">
                    <li><i className="anm anm-user-al" aria-hidden="true" />{user}</li>
                    <li><i className="icon anm anm-clock-r" /> <time dateTime={date}>{date}</time></li>
                </ul>
                <div className="rte">
                    <p> {para}</p>
                </div>
                <p><Link to="/" className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true" /></Link></p>
            </div>

        </>
    )
}

export default PostCard
