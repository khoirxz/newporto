import Image from "next/image";
import Link from "next/link";

const Card = ({ title, thumbnail, description, slug }) => {
  return (
    <Link legacyBehavior href={`/work/${slug}`}>
      <a>
        <div className="bg-white/10 p-5 rounded-lg backdrop-blur-md">
          <div className="relative w-full h-[200px]">
            <Image
              src={"https:" + thumbnail.fields.file.url}
              fill
              sizes="100vh"
              blurDataURL={"https:" + thumbnail.fields.file.url}
              placeholder="blur"
              priority
              className="rounded-md object-left-top object-cover"
              alt={thumbnail?.fields?.title}
            />
          </div>

          <h3 className="mt-4 text-xl font-bold">{title}</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
