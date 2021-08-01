import React, { useState }from 'react';
// import { Form, Label, Input, Col } from 'react-bootstrap';
import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';

const FlashcardSet = (props) => {
    // const [word, setWord] = useState('');
    // const [definition, setDefinition] = useState('');
    const [ deckName, setDeckName] = useState('')
    const [ id, setId] = useState('')

    const paperStyle = { padding: '30px 20px', height:'50vh', width: 480, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/card/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            setName: deckName,
            owner: setId 
           
        }),
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : props.sessionToken,
            'Access-Control-Allow-Origin': '*'   
        }),
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        setDeckName('')
        // setWord('');
        // setDefinition('');
        // props.fetchRecipes();
        })
    .catch((err) => {
        console.log(err, 'Flashcard Not Created')
    })
    }

    return (
       

            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <QueueIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Create Flashcard Set</h2>
                </Grid>
                    <br />
                <form>
                     <TextField fullWidth variant='filled' label='Set Name' placeholder="Name your set" />
                     <br />
                     <br />

                    <TextField fullWidth variant='filled' label='Word' placeholder="Enter your Word" />
                    <br />
                    <br />
                    <TextField fullWidth variant='filled' label='Definition' placeholder="Enter your Definition" />
                    
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' onClick={'text'}>Save</Button>
                </form>
            </Paper>
            </Grid>
    )
}

export default FlashcardSet;