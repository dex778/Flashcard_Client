import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
var passwordValidator = require('password-validator');


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        fetch(`http://localhost:8000/register`, {
            method: 'POST',
            body:JSON.stringify({
                    username: username, 
                    password: password
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
            console.log(data.sessionToken)
        })
    }


    const paperStyle = { padding: '30px 20px', height:'70vh', width: 480, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const schema = new passwordValidator();

    schema
    .is().min(8)                                    // Minimum length 8
    .is().max(15)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


    return (
        <Grid >
            <Paper elevation={20} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label='Username'  placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)} />
                    <TextField fullWidth label='Password' pattern=".{8,}" placeholder="Enter password" onChange={(e) => (schema.validate(setPassword(e.target.value))) }/>
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <br />
                    <br />
                    <Button fullWidth type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;
