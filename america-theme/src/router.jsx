import * as reactRouter from "react-router-dom";

import Home from "./pages/home";
import WhoWeAre from "./pages/WhoWeAre";

import React from "react";
import Quimicos from "./pages/Quimicos";
import Hidraulicos from "./pages/Hidraulicos";
import Pia from "./pages/Pia";
import Kros from "./pages/Kros";
import Bilherteria_ind from "./pages/Bilherteria_ind";
import Bilheteria_dupl from "./pages/Bilheteria_dupl";
const Router = (_) => {
  return (
    <>
      <reactRouter.Routes>
        <reactRouter.Route exact path="/" element={<Home />} />
        <reactRouter.Route exact path="/about" element={<WhoWeAre />} />
        {/* todo */}
        {/* <reactRouter.Route exact path="/produtos" element={<Produtos />} /> */}
        <reactRouter.Route
          exact
          path="/produtos/quimicos"
          element={<Quimicos />}
        />
        <reactRouter.Route
          exact
          path="/produtos/hidraulicos"
          element={<Hidraulicos />}
        />
        <reactRouter.Route exact path="/produtos/pia" element={<Pia />} />
        <reactRouter.Route exact path="/produtos/kros" element={<Kros />} />
        <reactRouter.Route
          exact
          path="/produtos/bilheteria_individual"
          element={<Bilherteria_ind />}
        />
        <reactRouter.Route
          exact
          path="/produtos/bilheteria_dupla"
          element={<Bilheteria_dupl />}
        />
      </reactRouter.Routes>
    </>
  );
};

export default Router;
