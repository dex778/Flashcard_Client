import React, { useState, useEffect } from 'react';

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


function App() {
  const [sessionToken, setSessionToken] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  const Logout = () => {
    localStorage.clear();
    setSessionToken('')
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
      <Navigation logout={Logout}/>

      <Router>
          {sessionToken === localStorage.getItem('token') ? (
            <>
              <Route exact path="/" component={Home} />
            {<Route exact path='/flashcards' render={(props) => (<Flashcards {...props} sessionToken={sessionToken} />
              )}/>}
              
              {<Route exact path='/flashcardset' render={(props) => (<FlashcardSet {...props} sessionToken={sessionToken} />
              )}/>}

               {<Route exact path='/createdflashcard' render={(props) => (<CreateFlashcard {...props} sessionToken={sessionToken} />
              )}/>}
              

              {/* <Route exact path='/recipeTable' component={RecipeTable} /> */}
            </>
          ) : <Authorization updateToken={updateToken} />}
        </Router>

      {/* <Route  exact path="/login" component={Login} />
      <Route  exact path="/signup" component={SignUp} /> */}

      {/* <Route exact path="/flashcards" component={Flashcards} />
      <Route exact path="/flashcardset" component={FlashcardSet} />
      <Route exact path="/landingpage" component={LandingPage} /> */}

      </div>
    <Footer />
    </div>
  );
}

export default App;

