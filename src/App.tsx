import "./App.css";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { Armrest } from "./pages/Armrest";
import { TrunkBags } from "./pages/TrunkBags";
import { GasCylinderCase } from "./pages/GasCylinderCase";
import { TireCase } from "./pages/TireCase";
import { FirstAidBag } from "./pages/FirstAidBag";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter basename={"/"}>
      <div id="products">
        <Routes>
          <Route path={"/armrest"} element={<Armrest />} />
          <Route path={"/trunkbags"} element={<TrunkBags />} />
          <Route path={"/gascylinder"} element={<GasCylinderCase />} />
          <Route path={"/tirecase"} element={<TireCase />} />
          <Route path={"/firstaidbag"} element={<FirstAidBag />} />
          <Route path={"/"} element={<Armrest />} />
          <Route path={"*"} element={<Navigate to="/armrest" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
