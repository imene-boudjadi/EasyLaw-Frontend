import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/homePage'
import NewsPage from './Pages/newsPage'
import AidePage from './Pages/aidePage'
import OffresPage from './Pages/offresPage'
import DetailNews from './Pages/detailPage'
import LoginPage from './Pages/loginPage'
import RegisterPage from './Pages/registerPage'
import DetailsMahkamaPage from './Pages/detailsMahkamaPage'
import DetailsMajlissPage from './Pages/detailsMajlissPage'
import HistoriquesFacturationPage from './Pages/historiquesFacturationPage'

function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Aide' element={<AidePage/>}/>
          <Route path="/News/DetailNews/:idNews" element={<DetailNews />} />
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Offres' element={<OffresPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detailsMahkama/:id" element={<DetailsMahkamaPage />} />  
          <Route path="/detailsMajliss/:id" element={<DetailsMajlissPage />} />
          <Route path="/historiquesFact" element={<HistoriquesFacturationPage />} />
        </Routes>
 </Router>   
  </div>
  );
}

export default App;
