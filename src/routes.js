import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";


function AppRoutes() {
  return (
      <BrowserRouter>
        <Menu/>
        
        <Routes>
          <Route
            path="/"
            element={<Inicio />}
          />
          <Route
            path="/sobremim"
            element={<SobreMim />}
          />
          <Route
            path="*"
            element={<div>Pagina Não Encontrada</div>}
          />


        </Routes>

        <Rodape/>
      </BrowserRouter>
  );
}

export default AppRoutes;
