import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import PaginaPadrão from "./Componentes/PaginaPadrao";
import Post from "./pages/Post";
import NaoEncontrada from "./pages/NaoEncontrada";
import ScrollToTop from "./Componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrão />}>
          <Route index element={<Inicio />}/>

          <Route path="sobremim" element={<SobreMim />}/>
          
          
        </Route>
        
        <Route path="posts/:id" element={<Post/>}/>
        <Route
          path="*"
          element={<NaoEncontrada/>}
        />


      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default AppRoutes;
