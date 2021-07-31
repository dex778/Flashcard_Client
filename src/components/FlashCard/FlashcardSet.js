import React from 'react';
// import { Form, Label, Input, Col } from 'react-bootstrap';
import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';

const FlashcardSet = () => {

    const paperStyle = { padding: '30px 20px', height:'40vh', width: 480, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

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