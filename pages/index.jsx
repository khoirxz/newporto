import { Section } from "../components/Atom";
import { createClient } from "contentful";
import { Card } from "../components/Molecules";

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
