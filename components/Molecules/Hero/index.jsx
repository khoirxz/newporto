import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/rootbackdor/",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/rizqi.khoir/",
  },
  {
    id: 4,
    name: "Github",
    link: "https://www.github.com/khoirxz/",
  },
];

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[800px] h-[30rem] w-full mx-auto px-6 lg:px-0 flex flex-row items-center">
        <div>
          <h1 className="font-semibold text-2xl my-2">Rizqi Khoirurrohman</h1>
          <p className="font-body text-xl text-gray-600 dark:text-gray-400 my-2">
            I&apos;m a full stack engineer with strong experience.
          </p>
          <p className="font-body text-xl text-gray-600 dark:text-gray-400 my-2">
            make something by combining creativity and technology to create
            something unique and can be enjoyed by everyone.
          </p>

          <div className="flex gap-2 items-center mt-5 flex-wrap">
            {data.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                className="transition-all rounded-lg font-medium bg-black/20 dark:bg-white/20 hover:bg-black/10 hover:dark:bg-white/10 px-3 py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="mailto:khoirrurrohman@gmail.com"
              className="transition-all rounded-lg font-medium bg-black/20 dark:bg-white/20 hover:bg-black/10 hover:dark:bg-white/10 px-3 py-2"
            >
              Khoirrurrohman@gmail.com
            </Link>
            <p className="cursor-pointer transition-all rounded-lg font-medium bg-black/20 dark:bg-white/20 hover:bg-black/10 hover:dark:bg-white/10 px-3 py-2">
              CV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
