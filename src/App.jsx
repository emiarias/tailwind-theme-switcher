import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <Navbar/>
      <main className="bg-ui-bg flex flex-col items-center justify-center grow">
        <div className="flex gap-4 mb-12">
          <button
            className="px-4 py-2 font-bold bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-300 cursor-pointer"
            onClick={() => setTheme("default")}
          >
            Default
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-800 transition duration-300 cursor-pointer"
            onClick={() => setTheme("midnight")}
          >
            Midnight
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-800 transition duration-300 cursor-pointer"
            onClick={() => setTheme("forest")}
          >
            Forest
          </button>
        </div>
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-black text-ui-text mb-6">
            Tailwind V4 <br />
            <span className="text-ui-text">Themes.</span>
          </h1>
          <p className="text-xl text-ui-text opacity-70 mb-10 ">
            Utilizamos variables CSS para cambiar los colores al instante. Sin
            archivos de configuración, sin lógica compleja. Puro Tailwind.
          </p>
          <button className="uppercase px-10 py-4 bg-ui-btn text-ui-bg font-bold rounded-xl">
            Comienza a codear
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
