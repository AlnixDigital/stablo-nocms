import Layout from "@components/layout.js";
import Container from "@components/container";
import PostList from "@components/postlist";
import { mainPosts, secondaryPosts } from "../public/data.js";

export default function Posts() {
  console.log(mainPosts);
  console.log(secondaryPosts);

  return (
    <>
      <Layout>
        <Container>
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
            {mainPosts.map((post, idx) => (
              <PostList
                key={idx}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {secondaryPosts.map((post, idx) => (
              <PostList key={idx} post={post} aspect="square" />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
