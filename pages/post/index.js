import Image from "next/legacy/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { parseISO, format } from "date-fns";
import cheerio from "cheerio";

import CategoryLabel from "@components/blog/category";
import AuthorCard from "@components/blog/authorCard";

import { mainPosts } from "../../public/data.js";

export default function Post() {
  const post = mainPosts[0];
  const AuthorimageProps = mainPosts[0]?.author?.image;

  return (
    <>
      <Layout>
        <NextSeo title={post.title} description={post.title} />
        <Container className="!pt-0">
          <div className="max-w-screen-md mx-auto ">
            <div className="text-center">
              <CategoryLabel categories={post.categories} />
            </div>

            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {post.title}
            </h1>

            <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-10 h-10">
                  <Image
                    src={AuthorimageProps}
                    objectFit="cover"
                    placeholder="blur"
                    alt={post?.author?.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    {post.author.name}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time
                      className="text-gray-500 dark:text-gray-400"
                      dateTime={post?.publishedAt}>
                      {format(
                        parseISO(post?.publishedAt),
                        "MMMM dd, yyyy"
                      )}
                    </time>
                    <span>· 8 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
          <Image
            src={post.mainImage}
            alt="Thumbnail"
            placeholder="blur"
            layout="fill"
            loading="eager"
            objectFit="cover"
          />
        </div>
        <Container>
          <article className="max-w-screen-md mx-auto ">
            <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
              {post.body.map(text => {
                const myHtml = cheerio.load(text, null, false);

                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: myHtml.html()
                    }}
                  />
                );
              })}
            </div>
            <div className="flex justify-center mt-7 mb-7">
              <Link href="/" legacyBehavior>
                <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                  ← View all posts
                </a>
              </Link>
            </div>
            <AuthorCard author={post.author} />
          </article>
        </Container>
      </Layout>
    </>
  );
}
