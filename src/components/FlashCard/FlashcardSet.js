import React, { useState }from 'react';
// import { Form, Label, Input, Col } from 'react-bootstrap';
import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';

const paperStyle = { padding: '30px 20px', height:'50vh', width: 480, margin: "20px auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }

/*
class FlashcardSet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            deckName: ''
    }
}
     handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/set/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            deckName: this.
           
        }),
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : props.sessionToken  
        }),
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        setDeckName('')
        })
    .catch((err) => {
        console.log(err, 'Flashcard Not Created')
    })
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

*/

const FlashcardSet = (props) => {
    // const [word, setWord] = useState('');
    // const [definition, setDefinition] = useState('');
    const [ deckName, setDeckName] = useState('')
    const [ id, setId] = useState('')

   

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/set/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            setName: deckName
           
        }),
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : props.sessionToken  
        }),
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        setDeckName('')
        })
    .catch((err) => {
        console.log(err, 'Flashcard Not Created')
    })
    }

    return (
       

            <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <QueueIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Create Flashcard Set</h2>
                </Grid>
                    <br />
                <form onSubmit={handleSubmit}>
                     <TextField fullWidth variant='filled' label='Set Name' placeholder="Name your set" onChange={(e) => setDeckName(e.target.value )} />
                    
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' >Save</Button>
                </form>
            </Paper>
            </Grid>
    )
}

export default FlashcardSet;