import React from 'react';

import './App.css';
import Authorization from '../src/components/LandingPage/Authorization';
import Navigation from '../src/components/LandingPage/Navigation'
import Flashcards from './components/FlashCard/Flashcards';
import FlashcardSet from './components/FlashCard/FlashcardSet';
import Footer from '../src/components/LandingPage/Footer';
import Home from '../src/components/LandingPage/Home'
// import Login from '../src/Login';
// import SignUp from '../src/SignUp';

// import LandingPage from './Home';
import{ BrowserRouter as Router, Route } from 'react-router-dom'
import CreateFlashcard from './components/FlashCard/CreateFlashcard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: ''
    }  
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState((localStorage.getItem('token')))
  }
  }
    updateToken = (newToken) => {
    localStorage.setItem('token', JSON.stringify(newToken));
    this.setState(newToken);
    // console.log(sessionToken);
  }

    Logout = () => {
    localStorage.clear();
    this.setState({
      sessionToken: '',
    }
    );
  }


  render() {
    return(
      <div className="page-container">
      <div className="content-wrap">
      <Navigation logout={this.Logout}/>

      <Router>
          {this.state.sessionToken === localStorage.getItem('token') ? (
            <>
              <Route exact path="/" component={Home} />
            {<Route exact path='/flashcards' render={(props) => (<Flashcards {...props} sessionToken={this.state.sessionToken} />
              )}/>}
              
              {<Route exact path='/flashcardset' render={(props) => (<FlashcardSet {...props} sessionToken={this.state.sessionToken} />
              )}/>}

               {<Route exact path='/createdflashcard' render={(props) => (<CreateFlashcard {...props} sessionToken={this.state.sessionToken} />
              )}/>}
              
            </>
          ) : <Authorization updateToken={this.updateToken} />}
        </Router>

      </div>
    <Footer />
    </div>
    )
  }

}

export default App;






