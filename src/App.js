import { Routes ,Route,Link} from "react-router-dom";
import './App.css'
import News from "./pages/News/News";
import Main from "./pages/mainPage/Main";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";


function App() {
  

  
  return (
    <div className="App">
      <div className="blocks">
            <Link className="link" to="/">Главная</Link>
            <Link className="link" to="/news">Новости</Link>
            <Link className="link" to="/profile">Профиль</Link>
            <Link className="link" to="/login">Логин</Link>
      </div>
     <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/news" element={<News/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
