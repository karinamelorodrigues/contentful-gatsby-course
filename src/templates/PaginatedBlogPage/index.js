import React from 'react';
import { Layout } from 'components';
import { Link } from "gatsby";
import { Content, Post, Pagination, NumberPage } from "./style.js"

const PaginatedBlogPage = ({pageContext}) => {
    return (
        <Layout>
            <Content>
                {pageContext.posts.map(post => (
                    <Post key={post.contentful_id}>
                        <div>
                            <Link to={post.slug}>
                                {post.title}
                            </Link>
                        </div>
                        <div>{post.description}</div>
                        <div>
                            <small>{post.publishedDate}</small>
                        </div>
                    </Post>
                ))}
            </Content>
            <Pagination>
                {Array.from({length: pageContext.totalPages}).map((n, i) => {
                    return (
                        <Link to={`/${pageContext.blogSlug}/${i === 0? '' : i + 1}`}>
                            <NumberPage key={i} isActivePage={((i + 1) === pageContext.currentPage ? true : false)}>
                                { i + 1 }
                            </NumberPage>
                        </Link>
                    );
                })}
            </Pagination>
        </Layout>
    );
}

export default PaginatedBlogPage;