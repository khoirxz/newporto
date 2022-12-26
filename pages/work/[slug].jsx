import { Section } from "../../components/Atom";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "portofolioPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "portofolioPost",
    "fields.slug": params.slug,
  });

  return {
    props: { recipe: items[0] },
    revalidate: 1,
  };
};

const Slug = ({ recipe }) => {
  const { title, link, thumbnail, tech, description } = recipe.fields;

  return (
    <Section>
      <div className="mt-28">
        <div className="min-h-[90vh] px-4 py-5 bg-white/5 backdrop-blur-sm rounded-t-md relative">
          <div>
            <div className="relative w-full h-80">
              <Image
                alt={thumbnail.fields.title}
                src={`https:${thumbnail.fields.file.url}`}
                sizes="(min-width: 400px) 400px, 100vw"
                fill
                className="rounded-md object-left-top object-cover"
                priority
              />
            </div>
            <div className="my-5">
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex flex-row gap-4">
              {tech.map((item, i) => (
                <span key={i} className="border p-2 rounded-md font-medium">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-3 font-body text-lg">
              {documentToReactComponents(description)}
            </div>
            <div className="my-5">
              <Link href={link} target="_blank">
                <button className="w-32 dark:bg-white/20 bg-black/20 hover:bg-black/30 dark:hover:bg-white/30 py-2 rounded-md">
                  Visit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Slug;
