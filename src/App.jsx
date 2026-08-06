import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./routes/Home"
import { DireitoCivel } from "./routes/DireitoCivel"
import { DireitoConsumidor } from "./routes/DireitoConsumidor"
import { DireitoCriminal } from "./routes/DireitoCriminal"
import { DireitoFamilia } from "./routes/DireitoFamilia"
import { DireitoTrabalhista } from "./routes/DireitoTrabalhista"

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/direito-civel" element={<DireitoCivel />}/>
        <Route path="/direito-consumidor" element={<DireitoConsumidor />}/>
        <Route path="/direito-criminal" element={<DireitoCriminal />}/>
        <Route path="/direito-familia" element={<DireitoFamilia />}/>
        <Route path="/direito-trabalhista" element={<DireitoTrabalhista />}/>        
      </Routes>
    </div>
    </>
  )
}

export default App
