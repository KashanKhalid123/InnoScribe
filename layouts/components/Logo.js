import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  const { base_url, logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand block position-absolute  start-0 ml-4 md:ml-8"
    >
      {src || logo ? (
        <Image
          width={logo_width.replace("px", "") * 1}
          height={logo_height.replace("px", "") * 1}
          src={src ? src : logo}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
