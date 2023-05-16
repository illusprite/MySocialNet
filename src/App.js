import './App.css';
import Header from './components/Header/Header';
import MessengerContainer from './components/Messenger/MessengerContainer';
import UsersContainer from './components/Users/UsersContainer';
import Nav from './components/Nav/Nav';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';




const App = (props) => {
   
   return (<BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/Profile/:userId?' element={<ProfileContainer/>}/>
                  <Route path='/Users' element={<UsersContainer/>}/>
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


