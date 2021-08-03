import React from 'react';
import Button  from '@material-ui/core/Button';
import './Home.css'
import { Link } from 'react-router-dom';


    //this is the Home page where the user can chose where to go next.

class Home extends React.Component {
    

    render() {
        return (
            <div className='container'>
            <h1>Welcome to Study JavaScript</h1>
        <div className='flex-container'>
        <Link to="/flashcards">
        <Button style={{ margin:'5px'}} type='button' variant="contained" color="primary" >Flashcard</Button>
        </Link>
        <br />
        <br />

        <Link to="/flashcardset">
        <Button style={{ margin:'5px'}} type='button' variant="contained" color="primary" >Flashcard Set</Button>
        </Link>
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