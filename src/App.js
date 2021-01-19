import React from 'react';
import './App.css';
import HeaderContainer from './componets/Header/HeaderContainer'
import Navbar from './componets/Navbar/Navbar'
import Profile from './componets/Profile/ProfileContainer'
import UsersContainer from './componets/Users/UsersContainer'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import { Route } from 'react-router-dom';
import News from './componets/News/News'
import Music from './componets/Music/Music'
import Settings from './componets/Settings/Settings'
import Login from './componets/Login/Login';

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className ='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        
        <div className="content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    )
  }
}