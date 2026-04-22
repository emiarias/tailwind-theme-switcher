import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-ui-bg-sec shadow-md transition-colors duration-300">
      <a
        href="https://learn-react-tailwind.netlify.app/"
        className="text-ui-text text-xl font-bold"
      >
        Practicas con Tailwind CSS
      </a>
      <div className="flex  items-center gap-4">
        <a
          href="https://learn-react-tailwind.netlify.app/"
          className="flex items-center text-ui-text hover:font-semibold group"
          title="ver mas ejemplos de TailwindCSS"
        >
          <LuArrowLeft className="mr-2 group-hover:text-lg" /> Mas ejemplos
        </a>
        <a
          href="https://github.com/emiarias/learn-react-tailwind"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/github/stars/emiarias/learn-react-tailwind?style=social"
            alt="GitHub Stars"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
