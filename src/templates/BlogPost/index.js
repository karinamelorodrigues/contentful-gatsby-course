import React from "react";
import { Layout, RichText, SEO } from "components";

const BlogPost = (props) => {
  return (
    <Layout>
      <SEO
        title={props.pageContext.post.title}
        description={props.pageContext.post.description}
      />

      <RichText raw={props.pageContext.post.pageContent.raw} />
    </Layout>
  );
};

export default BlogPost;
