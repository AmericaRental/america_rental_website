import * as reactRouter from "react-router-dom";

import Home from "./pages/home";
import WhoWeAre from "./pages/WhoWeAre";

import React from "react";
import Quimicos from "./pages/Quimicos";
import Hidraulicos from "./pages/Hidraulicos";
import Pia from "./pages/Pia";
import Kros from "./pages/Kros";
import BilherteriaInd from "./pages/Bilherteria_ind";
import BilheteriaDupl from "./pages/Bilheteria_dupl";

import ExtraLuxo from "./pages/quimicos/extra_luxo";
import Luxo from "./pages/quimicos/luxo";
import PNE from "./pages/quimicos/pne";
import Standard from "./pages/quimicos/stardard";

const AppRoutes = (_) => {
  return (
    <>
      <reactRouter.Routes>
        <reactRouter.Route exact path="/" element={<Home />} />
        <reactRouter.Route exact path="/about" element={<WhoWeAre />} />
        <reactRouter.Route path="/produtos/quimicos" element={<Quimicos />} />
        <reactRouter.Route
          path="/produtos/quimicos/extraluxo"
          element={<ExtraLuxo />}
        />
        <reactRouter.Route
          path="/produtos/quimicos/luxo"
          element={<Luxo />}
        />
        <reactRouter.Route
          path="/produtos/quimicos/pne"
          element={<PNE />}
        />
        <reactRouter.Route
          path="/produtos/quimicos/standard"
          element={<Standard />}
        />
        <reactRouter.Route
          path="/produtos/hidraulicos"
          element={<Hidraulicos />}
        />
        <reactRouter.Route path="/produtos/pia" element={<Pia />} />
        <reactRouter.Route path="/produtos/kros" element={<Kros />} />
        <reactRouter.Route
          path="/produtos/bilheteria_individual"
          element={<BilherteriaInd />}
        />
        <reactRouter.Route
          path="/produtos/bilheteria_dupla"
          element={<BilheteriaDupl />}
        />
      </reactRouter.Routes>
    </>
  );
};

export default AppRoutes;
