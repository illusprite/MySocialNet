import './App.css';
import React from 'react';
import MessengerContainer from './components/Messenger/MessengerContainer';
import UsersContainer from './components/Users/UsersContainer';
import Nav from './components/Nav/Nav';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import {Provider} from 'react-redux';

class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }
      return (<BrowserRouter>
         <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/Profile/:userId?' element={<ProfileContainer />} />
                  <Route path='/Users' element={<UsersContainer />} />
                  <Route path='/News' element={<News />} />
                  <Route path='/Messenger/*' element={<MessengerContainer />} />
                  <Route path='/Friends' element={<Friends />} />
                  <Route path='/Music' element={<Music />} />
                  <Route path='/Settings' element={<Settings />} />
                  <Route path='/Login' element={<LoginPage />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>);
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

export let AppContainer = connect(mapStateToProps, { initializeApp })(App);;

const SamuraiJSApp = (props) => {
   return <React.StrictMode>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </React.StrictMode>
}

export default SamuraiJSApp;



