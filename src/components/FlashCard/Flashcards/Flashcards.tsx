import React from 'react';
// import './Flashcards.css';
import { Grid, Paper, Avatar, Button, TextField } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import CreateFlashcard from './CreateFlashcard';
import APIURL from '../../lib/environment';


const paperStyle = { padding: '30px 20px', width: 480, margin: "20px auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }

interface customProps {
    sessionToken: string
}

interface initialState {
    word: string
    definition: string
    isSubmitting: boolean
    isEditing: boolean
    currentId: number
    cards: any[]
}


class Flashcards extends React.Component<customProps, initialState> {
    constructor(props: customProps){
        super(props)
        this.state = {
            word: '',
            definition: '',
            isSubmitting: false,
            isEditing: false,
            currentId: 0,
            cards: []
        }
    }
    
    componentDidMount() {
       this.getCardData()
      }

    setEdit = (card: any) => {
        this.setState({
            isEditing: true,
            currentId: card.id,
            word: card.word,
            definition: card.definition
        })
    }

    getCardData = () => {
        fetch(`${APIURL}/card/flashcard`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.sessionToken 
            }),
            
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                cards: data
            });
    
            })
        .catch((err) => {
            console.log(err, 'Flashcard Not Created')
        })
    }

    deleteCardData = (id: string) => {
        fetch(`${APIURL}/card/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.sessionToken 
            }),
            
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            this.getCardData();
    
            })
        .catch((err) => {
            console.log(err, 'Flashcard Not Created')
        })
    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.setState({ isSubmitting: true });
        const URL = this.state.isEditing ? `${APIURL}/card/update/${this.state.currentId}`: `${APIURL}/card/create`;
        const method = this.state.isEditing ? 'PUT' : 'POST'

        fetch(URL, {
        method: method,
        body: JSON.stringify({ 
            word: this.state.word, 
            definition: this.state.definition,   
        }),
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : this.props.sessionToken 
        }),
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            word: '',
            definition: '',
            isEditing: false,
            currentId: 0
        });

        this.getCardData();

        })
    .catch((err) => {
        console.log(err, 'Flashcard Not Created')
    })
    .finally(() => {
        this.setState({ isSubmitting: false });
        console.log('this is firing')

    })

    }

    render(){
        return (
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}>
                        <QueueIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Create Flashcard</h2>
                </Grid>
                    <br />
                <form onSubmit={this.handleSubmit} noValidate>
                    <TextField fullWidth variant='filled' label='Word' placeholder="Enter your Word" value={this.state.word} onChange={(e) => this.setState({ word: e.target.value })} required />
                    <br />
                    <br />
                    <TextField fullWidth variant='filled' label='Definition' placeholder="Enter your Definition" value={this.state.definition} onChange={(e) => this.setState({ definition: e.target.value })} required/>
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' disabled={this.state.isSubmitting}>{this.state.isEditing ? 'Update': 'Create'}</Button>
                </form>
            </Paper>
            <div style={{ display:"flex"}}>
                {this.state.cards.map((card) => {
                    return(
                        <div >
                            <CreateFlashcard data={card} onEdit={this.setEdit} onDelete={this.deleteCardData} />
                        </div>
                    )
                } )}
            </div>
        </Grid>

        )
    }
}






export default Flashcards;
















