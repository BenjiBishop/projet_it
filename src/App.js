import Acceuil from "./Components/Acceuil";
import ChoixNiveau from "./Components/ChoixNiveau"
import MatiereItem from './Components/MatiereItem'
import ChoixSerie from "./Components/ChoixSerie"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bienvenu from "./Components/Bienvenu";
import Cours from "./Components/Cours";
import Exercice from "./Components/Exercice";
import Video from "./Components/Video"
import Felicitation from "./Components/Felicitation";
import Questions from "./Components/Questions";
export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          {/* lien figma :
          https://www.figma.com/proto/77jza3Aaw8ekzQl6Twfics/School-project?node-id=1%3A8&scaling=scale-down&page-id=0%3A1 */}

          <Route path="/" element={<Acceuil />} />
          <Route path="/choixniveau" element={<ChoixNiveau />} />
          <Route path="/matiere" element={<MatiereItem />} />
          <Route path="/choixserie" element={<ChoixSerie />} />
          <Route path="/bienvenu" element={<Bienvenu/>} />
          <Route path="/cours" element={<Cours/>} ></Route>
          <Route path="/exercice" element={<Exercice/>} ></Route>
          <Route path="/video" element={<Video/>} ></Route>
          <Route path="/felicitation" element={<Felicitation/>}  ></Route>
          <Route path="/questions" element={<Questions/>} ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}