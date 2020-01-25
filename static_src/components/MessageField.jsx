import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {   
 
   state = {
       messages: [{text:"Привет!",author:'bot'}, {text:"Как дела?",author:'bot'}],
       input: '',
   };
   TextInput = React.createRef();
   componentDidMount() {
    this.TextInput.current.focus();
}
   componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author === 'me') {
        setTimeout(() =>
                this.setState({
                    messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', author: 'bot'} ] }),
            1000);
    }
}

   handleClick = (message) => {
    this.sendMessage(message)
    this.state.input = '';
};

handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value });
};

handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        this.sendMessage(message)
        this.state.input = '';
    }
};

sendMessage = (message) => {
    this.setState({ messages: [ ...this.state.messages, {text: message, author: 'me'} ] });
};


   render() {
       const messageElements = this.state.messages.map((message, index) => (
           <Message key={ index } text={ message.text } author={message.author}/>));

       return <div className="layout"> 
       <div id='main' className='message-field'>
           { messageElements }
        </div>
        <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   ref={this.TextInput}
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                   
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>

           </div>
       
   }
}