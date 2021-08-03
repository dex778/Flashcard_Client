import React from 'react';

import './App.css';
import Authorization from './components/LandingPage/Authorization';
import Navigation from './components/LandingPage/Navigation'
import Flashcards from './components/FlashCard/Flashcards/Flashcards';
import FlashcardSet from './components/FlashCard/FlashcardSet/FlashcardSet';
import Home from './components/LandingPage/Home'
import{ BrowserRouter as Router, Route } from 'react-router-dom'
import CreateFlashcard from './components/FlashCard/Flashcards/CreateFlashcard';
import EditFlashcardSet from './components/FlashCard/FlashcardSet/EditFlashcardSet';

// import EditFlashcard from './components/FlashCard/EditFlashcard';

export interface Session {
  sessionToken: string
}

class App extends React.Component<{}, Session> { 
  constructor(props: any) {
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

    updateToken = (newToken: string) => {
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

               {<Route exact path='/createdflashcard'  component={CreateFlashcard} />}
              

                {<Route  path='/flashcardset/:setId' render={(props) => (<EditFlashcardSet {...props} sessionToken={this.state.sessionToken} />
              )}/>}

                {/* {<Route  path='/flashcardset/:setId' render={(props) => (<EditFlashcardSet {...props} sessionToken={this.state.sessionToken} />
              )}/>} */}
              
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






