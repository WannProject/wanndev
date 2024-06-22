// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiDribbbleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://youtube.com/@awan_kurniawan2962?si=q3_KOnw3H3C3mDkg"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/wann_xi/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://m.facebook.com/profile.php?id=100024030669446"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/wannproject"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://dribbble.com/WannDev"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={"https://github.com/WannProject"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
