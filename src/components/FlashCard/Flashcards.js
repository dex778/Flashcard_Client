import React, {useState, useEffect} from 'react';
// import {Button  from 'react-bootstrap/Button';
import { Form, Label, Input, Col } from 'react-bootstrap';
import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import CreateFlashcard from './CreateFlashcard';


/*
class Flashcards extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            word: null,
            definition: null
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/card/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            word: word, 
            definition: definition,   
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
        setWord('');
        setDefinition('');

        })
    .catch((err) => {
        console.log(err, 'Flashcard Not Created')
    })
    }

    render(){
        return (
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <QueueIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Create Flashcard</h2>
                </Grid>
                    <br />
                <form onSubmit={this.handleSubmit} noValidate>
                    <TextField fullWidth variant='filled' label='Word' placeholder="Enter your Word" value={word} onChange={(e) => setWord(e.target.value)} required />
                    <br />
                    <br />
                    <TextField fullWidth variant='filled' label='Definition' placeholder="Enter your Definition" value={definition} onChange={(e) => setDefinition(e.target.value)} required/>
                    
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' >Create</Button>
                </form>
            </Paper>
        </Grid>

        )
    }
}


*/

const Flashcards = (props) => {
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    const paperStyle = { padding: '30px 20px', width: 480, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/card/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            word: word, 
            definition: definition, 
           
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
        setWord('');
        setDefinition('');
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
                    <h2 style={headerStyle}>Create Flashcard</h2>
                </Grid>
                    <br />
                <form onSubmit={handleSubmit} noValidate>
                    <TextField fullWidth variant='filled' label='Word' placeholder="Enter your Word" value={word} onChange={(e) => setWord(e.target.value)} required />
                    <br />
                    <br />
                    <TextField fullWidth variant='filled' label='Definition' placeholder="Enter your Definition" value={definition} onChange={(e) => setDefinition(e.target.value)} required/>
                    
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' >Create</Button>
                </form>
            </Paper>
        </Grid>

        
    )
}

export default Flashcards;



