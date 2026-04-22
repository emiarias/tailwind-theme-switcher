import { LuLaptop } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="py-5 bg-ui-bg-sec shadow-slate-400 shadow-xl">
      <p className="text-sm text-ui-text flex justify-center items-center">
        &copy; {new Date().getFullYear()} | Desarrollado por{" "}
        <LuLaptop className="mx-2" />
        Emilse Arias
      </p>
    </footer>
  );
};

export default Footer;
