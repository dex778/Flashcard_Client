import React from 'react';
import Button  from '@material-ui/core/Button';
import { Grid, Link } from '@material-ui/core'

import './Home.css'


const Home = () => {

    return (
        <div className='container'>
            <h1>Welcome to Study JavaScript</h1>
        <div className='flex-container'>
        <Button type='button' variant="contained" color="primary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcards';}}>Flashcard</Button>
        <br />
        <br />
        <br />
        <br />

        <Button type='button' variant="contained" color="secondary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcardset';}}>FlashcardSet</Button>
        </div>

        
       
        


        </div>
    )
}

export default Home;