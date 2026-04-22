import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-ui-bg-sec shadow-md transition-colors duration-300">
      <span className="text-ui-text text-xl font-bold">
        Practicas con Tailwind CSS
      </span>
      <div className="flex gap-3">
        <a
          href="#"
          className="flex items-center text-ui-text hover:font-semibold group"
        >
          <LuArrowLeft className="mr-2 group-hover:text-lg" /> Ver mas ejemplos
        </a>
        <a
          href="#"
          className="p-2 rounded-lg bg-slate-600 text-white dark:bg-black  hover:bg-slate-300 dark:hover:bg-white group transition-colors duration-300"
        >
          <LuGithub className="h-6 w-6 group-hover:text-black transition-colors duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
