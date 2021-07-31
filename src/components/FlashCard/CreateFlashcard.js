import React from 'react';


import ReactCardFlip from 'react-card-flip';

// Index Card Styling
const frontCard = { backgroundColor: 'gray', height: '300px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', borderRadius: '20px', margin: 'auto'}
const backCard = { backgroundColor: 'gray', height: '300px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', borderRadius: '20px', margin: 'auto'}
const seconDiv = { borderColor:'black', borderWidth: '2'}

//Index card inputs

const word = '';
const defintion = '';

class CreateFlashcard extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

            <div style={frontCard}> 
            This is the front of the card.
            <br />
            <br />
            <br />
            <div style={seconDiv}>
            <button onClick={this.handleClick}>Answer</button>
            <button onClick={this.handleClick}>Edit</button>
            <button onClick={this.handleClick}>Delete</button>
            </div>
            


            </div>
  
          <div style={backCard}>
            This is the back of the card.
            <br />
            <br />
            <br />


            <button onClick={this.handleClick}>Question</button>
            


            </div>        
            
            
            
        </ReactCardFlip>
      )
    }
  }


export default CreateFlashcard;


