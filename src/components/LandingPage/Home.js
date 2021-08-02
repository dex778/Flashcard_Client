import React from 'react';
import Button  from '@material-ui/core/Button';


import './Home.css'

class Home extends React.Component {
    

    render() {
        return (
            <div className='container'>
            <h1>Welcome to Study JavaScript</h1>
        <div className='flex-container'>
        <Button style={{ margin:'5px'}} type='button' variant="contained" color="primary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcards';}}>Flashcard</Button>
        <br />
        <br />
        <br />
        <br />

        <Button style={{ margin:'5px'}} type='button' variant="contained" color="secondary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcardset';}}>FlashcardSet</Button>
        </div>
        </div>
        )
    }
}



export default Home;

// const Home = () => {

//     return (
//         <div className='container'>
//             <h1>Welcome to Study JavaScript</h1>
//         <div className='flex-container'>
//         <Button type='button' variant="contained" color="primary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcards';}}>Flashcard</Button>
//         <br />
//         <br />
//         <br />
//         <br />

//         <Button type='button' variant="contained" color="secondary" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/flashcardset';}}>FlashcardSet</Button>
//         </div>

        
       
        


//         </div>
//     )
// }