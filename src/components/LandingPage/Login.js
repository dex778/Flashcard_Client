
import React, { useState, useEffect } from 'react';

import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import './Login.css'

const Login = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/login`, {
            method: 'POST',
            body:JSON.stringify({
                    username: username,
                    password: password
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                // 'Authorizaton': 'props.updateToken'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            props.updateToken(data.sessionToken)
        })
        console.log(username, password);
    }

    const paperStyle={padding: '30px 20px', height: '70vh', width: 480,  margin: "20px auto"};
    const avatarStyle={backgroundColor:"green"};
    const btnstyle={margin:'8px 0'}

    return (
        <div>
        {/* <h1>Welcome to Study JavaScript</h1> */}
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><HomeIcon/></Avatar>
                    <h2>Sign-in</h2>
                </Grid >

                <form onSubmit={handleSubmit}>
                <TextField label='Username' placeholder='Enter username' fullWidth  onChange={(e) => setUserName(e.target.value)} name="username" value={username} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth  onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                <br />
                <br />
                <br />
                <br />

                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth  >Sign-in</Button>
                </form>
                <Typography>
                <Link href="#" >
                    Forgot Password?
                </Link>
                </Typography>
                <Typography> Do you have an account?
                <Link href="#" >
                    Sign-up
                </Link>
                </Typography>

            </Paper>
        </Grid>

        </div> 
    )
}

export default Login;