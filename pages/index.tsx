import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import { ImagePost } from "../components/image-post";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPage = (props) => {
  return (
    <Layout>
      <div className="min-h-screen relative">
        <Navigation />

        <main className="h-full flex flex-col gap-4 container mx-auto min-h-screen justify-center">
          <div className="flex h-full items-center">
            <div className="lg:h-[40rem] lg:grid lg:grid-cols-2 lg:gap-20">
              <div className="pb-10 flex flex-col justify-center">
                <h1
                  className={
                    (classNames(styles.title),
                    "mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl")
                  }
                >
                  Denny Scott
                </h1>
                <h2 className="text-2xl tracking-tight text-indigo-400 font-bold sm:mt-5 sm:text-2xl lg:mt-3 lg:text-xl xl:text-2xl">
                  Senior Front-end Software Engineer
                </h2>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  I&lsquo;m a freelance senior front-end consultant from the
                  snowy city of Winnipeg. 10+ years of experience, still writes
                  blogs about function names.
                </p>

                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:max-w-xl lg:mx-0">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        />
                      </div>
                      {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      Add your email to the mailing list and be notified when a
                      new blog is posted!
                    </p> */}
                  </form>
                </div>
              </div>
              <div className="relative rounded-xl">
                <div className={styles.fade} />
                <Image
                  src="/images/pixel.gif"
                  layout="fill"
                  className="rounded-full object-cover object-right"
                  alt="pixel image  "
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
