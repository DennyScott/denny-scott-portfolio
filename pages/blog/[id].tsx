import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPostIds, getPostData, Post } from "../../lib/posts";
import style from "./blog.module.scss";
import { Layout } from "../../components/layout";
import { Navigation } from "../../components/navigation";

interface Props {
  postData: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
    code: string;
  };
}

export default function Blog(props: Props) {
  const { postData } = props;

  const Component = useMemo(
    () => getMDXComponent(postData.code),
    [postData.code]
  );

  return (
    <Layout>
      <Navigation />
      <div className={style.blog}>
        <h1 className="text-center">{postData.frontmatter.title}</h1>
        <Component />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
