import Link from "next/link";

import { Section } from "../components/Atom";
import { createClient } from "contentful";
import { Card, Social } from "../components/Molecules";

const Home = ({ posts }) => {
  // console.log(posts);
  return (
    <Section>
      <div>
        <h1 className="font-semibold text-2xl my-10">Work</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-24">
          {posts.map((item) => (
            <Card
              key={item.sys.id}
              title={item.fields.title}
              thumbnail={item.fields.thumbnail}
              description={item.fields.descThumb}
              slug={item.fields.slug}
            />
          ))}
        </div>
      </div>

      <div className="mt-56">
        <h1 className="font-semibold text-2xl my-10">Contact</h1>
        <p className="font-normal text-lg text-gray-600 dark:text-gray-400">
          Want to collaborate? or just say Hi 👋
        </p>
        <h2 className="text-xl lg:text-3xl my-4 font-bold text-blue-600">
          <Link href="mailto:khoirrurrohman@gmail.com">
            khoirrurrohman@gmail.com
          </Link>
        </h2>
        <p className="font-normal text-lg text-gray-600 dark:text-gray-400">
          more
        </p>
        <Social />
      </div>
    </Section>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries({
    content_type: "portofolioPost",
  });

  return {
    props: {
      posts: res.items,
    },
  };
};

export default Home;
