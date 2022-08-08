import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import BilherteriaInd from "./pages/Bilherteria_ind";
import BilheteriaDupl from "./pages/Bilheteria_dupl";
import Contato from "./pages/Contato";
import Hidraulicos from "./pages/Hidraulicos";
import Convencional from "./pages/hidraulicos/convencional";
import Chuveiro from "./pages/hidraulicos/chuveiro";
import Home from "./pages/home";
import Kros from "./pages/Kros";
import Orcamentos from "./pages/Orcamentos";
import Pia from "./pages/Pia";
import Quimicos from "./pages/Quimicos";
import ExtraLuxo from "./pages/quimicos/extra_luxo";
import Luxo from "./pages/quimicos/luxo";
import PNE from "./pages/quimicos/pne";
import Standard from "./pages/quimicos/stardard";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="contato" element={<Contato />} />
        <Route path="orcamento" element={<Orcamentos />} />
        <Route path="about" element={<WhoWeAre />} />

        <Route path="quimicos/standard" element={<Standard />} />
        <Route path="quimicos/luxo" element={<Luxo />} />
        <Route path="quimicos/extraluxo" element={<ExtraLuxo />} />
        <Route path="quimicos/pne" element={<PNE />} />
        <Route path="pia" element={<Pia />} />
        <Route path="kros" element={<Kros />} />

        <Route path="quimicos" element={<Quimicos />} />

        <Route path="hidraulicos/convencional" element={<Convencional />} />
        <Route path="hidraulicos/chuveiro" element={<Chuveiro />} />
        <Route path="hidraulicos" element={<Hidraulicos />} />

        <Route path="bilheteria_individual" element={<BilherteriaInd />} />
        <Route path="bilheteria_dupla" element={<BilheteriaDupl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
