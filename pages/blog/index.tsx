import React, { useMemo } from "react";
import { Layout } from "../../components/layout";
import { Navigation } from "../../components/navigation";
import { Post } from "../../components/post";
import { getSortedPostsData, Post as PostType } from "../../lib/posts";

interface Props {
  allPostsData: PostType[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog(props: Props) {
  const { allPostsData } = props;
  console.log(allPostsData);

  return (
    <Layout className="pb-16">
      <div className="relative">
        <Navigation />
        <div className="pt-48 container mx-auto">
          <div className="mt-12 flex flex-col gap-20">
            {allPostsData.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                date={post.date}
                description={post.description}
                tags={post.tags}
                url={post.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
