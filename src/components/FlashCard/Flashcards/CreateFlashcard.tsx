import React from 'react';


import ReactCardFlip from 'react-card-flip';

// Index Card Styling
const frontCard = { backgroundColor: '#3CAEA3', height: '300px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',  borderRadius: '20px', margin: '10px' }
const backCard = { backgroundColor: '#3CAEA3', height: '300px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',  borderRadius: '20px', margin: '10px' }
// const seconDiv = { borderColor: 'black', borderWidth: '2' }

interface customProps {
  data:any
  onEdit(data: any): any
  onDelete(id:string): any
}

interface initialState {
  data:any
  isFlipped: boolean
}

class CreateFlashcard extends React.Component<customProps, initialState> {
  constructor(props: customProps) {
    super(props);
    this.state = {
      isFlipped: false,
      data: this.props.data
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e:any) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

        <div style={frontCard}>
          <div style={{ margin: '10px', display: 'flex'}}>
            {this.state.data.word}
          </div>
          
          
          <div style={{ display: 'flex', margin: '10px'}}>
            <button style={{ margin:'5px'}} onClick={this.handleClick}>Flip</button>
            <button style={{ margin:'5px'}} onClick={() => this.props.onEdit(this.state.data)}>Edit</button>
            <button style={{ margin:'5px'}} onClick={() => this.props.onDelete(this.state.data.id)}>Delete</button>
          </div>

        </div>

        <div style={backCard}>

          <div>
            <button style={{ margin:'5px', }} onClick={this.handleClick}>Flip</button>
            {this.state.data.definition}
          </div>

        </div>



      </ReactCardFlip>
    )
  }
}


export default CreateFlashcard;


