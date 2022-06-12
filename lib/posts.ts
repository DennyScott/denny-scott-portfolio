import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";
import { bundleMDX } from "mdx-bundler";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  title: string;
  date: string;
  template: string;
  draft: boolean;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  fileName: string;
}

function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      ...matterResult.data,
      fileName,
    } as Post;
  });
}

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const allPostsData = getAllPosts();
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const posts = getAllPosts();
  const postIds = posts.map((post) => ({
    params: {
      id: post.slug,
    },
  }));

  return postIds;
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //      slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]
}

export async function getPostData(slug: string) {
  const allPosts = getAllPosts();

  const post = allPosts.find((post) => post.slug === slug);
  if (!post) return;

  const fullPath = path.join(postsDirectory, post.fileName);
  const source = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(source);

  const { code, frontmatter } = await bundleMDX({
    source: source,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkPrism];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };

  // Use remark to convert markdown into HTML string
  //   const processedContent = await remark()
  //     .use(html)
  //     .process(matterResult.content);
  //   const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    code: matterResult.content,
    ...post,
  };
}
