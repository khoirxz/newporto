import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const letter = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Card = ({ title, thumbnail, description, slug }) => {
  return (
    <motion.div variants={letter}>
      <Link legacyBehavior href={`/work/${slug}`}>
        <a>
          <div className="bg-white/10 p-5 rounded-lg backdrop-blur-md">
            <div className="relative flex flex-row lg:flex-col gap-5 items-center">
              <div className="relative min-w-[80px] h-[80px] lg:w-full lg:h-[200px]">
                <Image
                  src={"https:" + thumbnail.fields.file.url}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  className="rounded-md lg:object-left-top object-cover"
                  alt={thumbnail?.fields?.title}
                  loading="lazy"
                />
              </div>

              <div className="flex-col w-full">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="my-1 font-body text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default Card;
