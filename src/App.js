import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/homePage'
import NewsPage from './Pages/newsPage'
import AidePage from './Pages/aidePage'
import OffresPage from './Pages/offresPage'
import DetailNews from './Pages/detailPage'
import LawPage from './Pages/lawPage'
import Jurisprudence from './Pages/jurisprudence'
import ChatBot from './Pages/chatBot'
import GestionUser from './Pages/gestionUser'
import IndexLaw from "./Pages/indexLaw"
import IndexJurisprudence from "./Pages/indexJurisprudence"
import GestionOffres from "./Pages/gestionOffres"
import LawClassification from "./Pages/lawClassification"
import JrisprudenceClassification from "./Pages/JrisprudenceClassification"
import ScrapingTextJuridique from "./Pages/ScrapingTextJuridique"
import IndexNews from "./Pages/IndexNews"
import DetailFacture from './Pages/detailFacture'
import ProfilePage from './Pages/profilePage'; 
import NotifPage from './Pages/notifPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Aide' element={<AidePage />} />
          <Route path="/News/DetailNews/:idNews" element={<DetailNews />} />
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Offres' element={<OffresPage/>}/>
          <Route path='/Law' element={<LawPage/>}/>
          <Route path='/Jurisprudence' element={<Jurisprudence/>}/>
          <Route path='/ChatBot' element={<ChatBot/>}/>
          {/* administration pages  */}
          <Route path='/GestionUser' element={<GestionUser/>}/>
          <Route path='/ScrapingTextJuridique' element={<ScrapingTextJuridique/>}/>
          <Route path='/IndexLaw' element={<IndexLaw/>}/>
          <Route path='/IndexJurisprudence' element={<IndexJurisprudence/>}/>
          <Route path='/IndexNews' element={<IndexNews/>}/>
          <Route path='/GestionOffres' element={<GestionOffres/>}/>
          <Route path='/LawClassification' element={<LawClassification/>}/>
          <Route path='/JrisprudenceClassification' element={<JrisprudenceClassification/>}/>
          <Route path='/DetailFacture' element={<DetailFacture/>}/>
          <Route path='/ProfilePage' element={<ProfilePage />} />
          <Route path='/NotifPage' element={<NotifPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
