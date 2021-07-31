import React, {useState, useEffect} from 'react';
// import {Button  from 'react-bootstrap/Button';
import { Form, Label, Input, Col } from 'react-bootstrap';
import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import CreateFlashcard from './CreateFlashcard';




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

    // useEffect(() => {
        
    //     return (
    //         <CreateFlashcard />
    //     )
    // })

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

{/* <div>
        <h1 className="title">Welcome to your Flashcards</h1>
        <div className="input">
        <Form className="form">
            <Col xs={5}>
            <Form.Group className="mb-1" >
                <Form.Label>Word</Form.Label>
                <Form.Control  placeholder="Enter Word" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            </Col>

            <Col xs={5}>   
            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label> Definition</Form.Label>
                <Form.Control  placeholder="Definition" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicCheckbox">
            </Form.Group>
            </Col>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        </div> */}

