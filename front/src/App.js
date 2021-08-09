import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "typeface-roboto";
import "typeface-poppins";

import { Nav } from "./components/Nav";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { CatDog } from "./components/CatDog";

function App() {
  const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
      const handler = (e) => {
        e.preventDefault();
        setSupportsPWA(true);
        setPromptInstall(e);
      };
      window.addEventListener("beforeinstallprompt", handler);

      return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = (evt) => {
      evt.preventDefault();
      if (!promptInstall) {
        return;
      }
      promptInstall.prompt();
    };
    if (!supportsPWA) {
      return null;
    }

    return (
      <button
        className="link-button"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
      >
        Instale nosso web-app!
      </button>
    );
  };

  return (
    <div>
      <Nav />
      <div>
        <Banner />
        <CatDog />
        <InstallPWA />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
