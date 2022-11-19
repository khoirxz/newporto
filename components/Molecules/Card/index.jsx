import Image from "next/image";
import Link from "next/link";

const Card = ({ title, thumbnail, description, slug }) => {
  return (
    <Link legacyBehavior href={`/work/${slug}`}>
      <a>
        <div className="bg-white/10 p-5 rounded-lg backdrop-blur-md">
          <div className="relative flex flex-row lg:flex-col gap-5 items-center">
            <div className="relative w-[100px] h-[80px] lg:w-full lg:h-[200px]">
              <Image
                src={"https:" + thumbnail.fields.file.url}
                fill
                sizes="100vh"
                priority
                className="rounded-md lg:object-left-top object-cover"
                alt={thumbnail?.fields?.title}
              />
            </div>

            <div className="flex-col">
              <h2 className="mt-4 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm tracking-wide">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
