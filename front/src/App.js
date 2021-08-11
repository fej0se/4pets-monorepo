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
  return (
    <div>
      <Nav />
      <div>
        <Banner />
        <CatDog />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
