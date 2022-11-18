import Link from "next/link";

import { GrFacebookOption, GrInstagram, GrGithub } from "react-icons/gr";

const data = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/rootbackdor/",
    icon: <GrFacebookOption size={24} />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/rizqi.khoir/",
    icon: <GrInstagram size={24} />,
  },
  {
    id: 4,
    name: "Github",
    link: "https://www.github.com/khoirxz/",
    icon: <GrGithub size={24} />,
  },
];

const Social = ({ icon = true }) => {
  return (
    <div className="flex gap-2 items-center mt-3">
      {data.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          className="rounded-full hover:bg-black/10 hover:dark:bg-white/10 p-2"
        >
          {icon ? item.icon : item.name}
        </Link>
      ))}
    </div>
  );
};

export default Social;
