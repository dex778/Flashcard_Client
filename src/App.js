import React from 'react';

import './App.css';
import Authorization from '../src/components/LandingPage/Authorization';
import Navigation from '../src/components/LandingPage/Navigation'
import Flashcards from './components/FlashCard/Flashcards';
import FlashcardSet from './components/FlashCard/FlashcardSet';
// import Footer from '../src/components/LandingPage/Footer';
import Home from '../src/components/LandingPage/Home'
// import Login from '../src/Login';
// import SignUp from '../src/SignUp';

// import LandingPage from './Home';
import{ BrowserRouter as Router, Route } from 'react-router-dom'
import CreateFlashcard from './components/FlashCard/CreateFlashcard';
import EditFlashcardSet from './components/FlashCard/EditFlashcardSet';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      sessionToken: ''
    }  
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ sessionToken: token })
      console.log('CDM')
  }

  }

    updateToken = (newToken) => {
    localStorage.setItem('token', newToken );
    this.setState({ sessionToken: newToken});
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

                {<Route  path='/flashcardset/:setId' render={(props) => (<EditFlashcardSet {...props} sessionToken={this.state.sessionToken} />
              )}/>}
              
            </>
          ) : <Authorization updateToken={this.updateToken} />}
        </Router>

      </div>
    {/* <Footer /> */}
    </div>
    )
  }

}

export default App;






