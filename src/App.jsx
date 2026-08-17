import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./routes/Home";
import { DireitoCivel } from "./routes/DireitoCivel";
import { DireitoCriminal } from "./routes/DireitoCriminal";
import { DireitoFamilia } from "./routes/DireitoFamilia";
import { DireitoTrabalhista } from "./routes/DireitoTrabalhista";
import { DireitoPrevidenciario } from "./routes/DireitoPrevidenciario";
import { DireitoConsumidor } from "./routes/DireitoConsumidor";
import { PoliticaDePrivacidade } from "./routes/PoliticaDePrivacidade.jsx";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/layout/CookiesBanner.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direito-trabalhista" element={<DireitoTrabalhista />} />
          <Route path="/direito-civel" element={<DireitoCivel />} />
          <Route path="/direito-de-familia" element={<DireitoFamilia />} />
          <Route
            path="/direito-do-consumidor"
            element={<DireitoConsumidor />}
          />
          <Route path="/direito-criminal" element={<DireitoCriminal />} />
          <Route
            path="/direito-previdenciario"
            element={<DireitoPrevidenciario />}
          />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaDePrivacidade />}
          />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
}

export default App;
