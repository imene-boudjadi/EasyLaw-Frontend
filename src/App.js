import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/homePage'
import NewsPage from './Pages/newsPage'
import AidePage from './Pages/aidePage'
import OffresPage from './Pages/offresPage'



function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Aide' element={<AidePage/>}/>
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Offres' element={<OffresPage/>}/>
        </Routes>
       </Router>    </div>
  );
}

export default App;
