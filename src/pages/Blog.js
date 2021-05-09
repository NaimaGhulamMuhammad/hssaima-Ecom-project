import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/header'
import PageTitle from '../components/PageTitle'
import Footer from '../sections/Footer'
import PostCard from '../components/PostCard'
import BlogSection from '../sections/BlogSection'
import Sidebar from '../sections/Sidebar'


function Blog() {
    return (
        <>
        <PageTitle title='Blog-Grid View' />
        <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
                <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Blog Gridview</span>
            </div>
        </div>
        <div className="container">
        	<div className="row">
            <Sidebar />
            <BlogSection/>
          </div>
        </div>
        <Footer />

        </>
    )
}

export default Blog
