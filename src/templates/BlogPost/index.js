import React from 'react';
import { graphql } from 'gatsby';
import { Layout, RichText } from 'components';

const BlogPost = (props) => {
    console.log(props);
    console.log(props.postID);
    return (
        <Layout>
           {/*<RichText raw={props.data.contentfulBlogPost.pageContent.raw}/>*/}
           <RichText raw={props.pageContext.post.pageContent.raw}/>
        </Layout>
    );
}

/*export const query = graphql`
    query BlogPostQuery($postID: String){
        contentfulBlogPost(contentful_id: {eq: $postID}){
            publishedDate(formatString: "DD MMM YYYY")
            pageContent {
                raw
            }
            description
            title
            contentful_id
            slug
        }
    }


`*/

export default BlogPost;