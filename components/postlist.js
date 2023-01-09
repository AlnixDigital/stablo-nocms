import Image from "next/legacy/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import CategoryLabel from "@components/blog/category";

export default function PostList({ post, aspect, preloadImage }) {
  const imageProps = post?.mainImage;
  const AuthorimageProps = post?.author?.image;
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={
            ("relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square")
          }>
          <Link
            href={
              post.title ===
              `Architectural Engineering Wonders of the modern era for your Inspiration`
                ? `/post/`
                : null
            }>
            <a>
              <Image
                src={imageProps}
                alt={post.title}
                placeholder="blur"
                sizes="80vw"
                //sizes="(max-width: 640px) 90vw, 480px"
                layout="fill"
                objectFit="cover"
                priority={preloadImage ? true : false}
                className="transition-all"
              />
            </a>
          </Link>
        </div>
        <CategoryLabel categories={post.categories} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link
            href={
              post.title ===
              `Architectural Engineering Wonders of the modern era for your Inspiration`
                ? `/post/`
                : "#"
            }>
            <span
              className="     bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {post.title || (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link
                href={
                  post.title ===
                  `Architectural Engineering Wonders of the modern era for your Inspiration`
                    ? `/post/`
                    : "#"
                }>
                {post.title}
              </Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post.author.image && (
                <Image
                  src={AuthorimageProps}
                  objectFit="cover"
                  layout="fill"
                  alt={post?.author?.name}
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">{post.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm" dateTime={post?.publishedAt}>
            {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}
          </time>
        </div>
      </div>
    </>
  );
}
