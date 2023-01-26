import Image from "next/legacy/image";

export default function AuthorCard({ author }) {
  const imageProps = author?.image;
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          {
            <Image
              src={imageProps.src}
              objectFit="cover"
              alt={author.name}
              // placeholder="blur"
              layout="fill"
              className="rounded-full"
            />
          }
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About {author.name}
            </h4>
          </div>
          <div>
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
