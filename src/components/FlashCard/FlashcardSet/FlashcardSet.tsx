import React from 'react';

import { Grid, Paper, Avatar, Button, TextField  } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import CreateFlashcardSet from './CreateFlashcardSet';
import APIURL from '../../lib/environment';

const paperStyle = { padding: '30px 20px', height:'30vh', width: 480, margin: "20px auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }

interface customProps {
    sessionToken: string
}

interface initialState {
    deckName: string
    isSubmitting: boolean
    isEditing: boolean
    currentId: number
    cards: any[]

}

interface Params {
    id: string;

  }

class FlashcardSet extends React.Component<customProps, initialState, Params>{
    constructor(props: customProps){
        super(props)
        this.state = {
            deckName: '',
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
                deckName: card.deckName
            })
        }

        getCardData = () => {
            fetch(`${APIURL}/set/flashcard/`, {
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
                console.log(err, 'Flashcard Set Not Created')
            })
        }

        deleteCardData = (id: string) => {
            fetch(`${APIURL}/set/delete/${id}`, {
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
                console.log(err, 'Flashcard Deleted')
            })
        }

        handleSubmit = (e:any) => {
            e.preventDefault();
            this.setState({ isSubmitting: true });
            const URL = this.state.isEditing ? `${APIURL}/set/update/${this.state.currentId}`: `${APIURL}/set/create`;
            const method = this.state.isEditing ? 'PUT' : 'POST'


            fetch( URL, {
            method: method,
            body: JSON.stringify({ 
                deckName: this.state.deckName 
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
                deckName: '',
                isEditing: false,
                currentId: 0
            })

                this.getCardData();

            })
        .catch((err) => {
            console.log(err, 'Flashcard Set Not Created')
        })
        .finally(() => {
            this.setState({isSubmitting: false});
    
        })
        }

                    

    render() {
        return(
            <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid >
                    <Avatar style={avatarStyle}>
                        <QueueIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Create Flashcard Set</h2>
                </Grid>
                    <br />
                <form onSubmit={this.handleSubmit}>
                     <TextField fullWidth variant='filled' label='Set Name' placeholder="Name your set" value={this.state.deckName} onChange={(e) => this.setState({ deckName: e.target.value })} />
                    
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='primary' disabled={this.state.isSubmitting}>{this.state.isEditing ? 'Update': 'Create'}</Button>
                </form>
            </Paper>
            <div style={{ display:"flex"}}>
                {this.state.cards.map((card: any) => {
                    return(
                        <div >
                            <CreateFlashcardSet data={card} onEdit={this.setEdit} onDelete={this.deleteCardData} />
                        </div>
                    )
                } )}
            </div>
            </Grid>
        )
    }
}


export default FlashcardSet;