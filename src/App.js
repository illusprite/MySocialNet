import './App.css';
import Header from './components/Header/Header';
import MessengerContainer from './components/Messenger/MessengerContainer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


const App = (props) => {
   debugger
   return (<BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/Profile' element={<Profile/>}/>
                  <Route path='/News' element={<News />}/>
                  <Route path='/Messenger/*' element={<MessengerContainer/>}/>
                  <Route path='/Friends' element={<Friends />}/>
                  <Route path='/Music' element={<Music />}/>
                  <Route path='/Settings' element={<Settings />}/>
               </Routes>
            </div>
         </div>
      </BrowserRouter>);
}
export default App;
