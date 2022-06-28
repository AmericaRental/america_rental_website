import * as reactRouter from "react-router-dom";

import Home from "./pages/home";
import WhoWeAre from "./pages/WhoWeAre";

import React from "react";

const Router = (_) => {
  return (
    <>
      <reactRouter.Routes>
        <reactRouter.Route exact path="/" element={<Home />} />
        <reactRouter.Route exact path="/about" element={<WhoWeAre />} />
      </reactRouter.Routes>
    </>
  );
};

export default Router;
