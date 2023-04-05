import './App.css';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


const App = () => {
   return (<BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/Profile' Component={Profile}/>
                  <Route path='/News' Component={News}/>
                  <Route path='/Messenger' Component={Messenger}/>
                  <Route path='/Friends' Component={Friends}/>
                  <Route path='/Music' Component={Music}/>
                  <Route path='/Settings' Component={Settings}/>
               </Routes>
            </div>
         </div>
      </BrowserRouter>);
}
export default App;
