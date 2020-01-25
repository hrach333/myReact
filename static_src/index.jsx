
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/MessageField';


// let messages = ['Привет', 'Как дела?'];

// const MessageComponent = (props) => <div>{props.text}</div>;

// const MessageField = (props) => {
//    return props.messages.map(message => <MessageComponent text={ message } />);
// };


ReactDOM.render(
   <MuiThemeProvider>
      <MessageField />
   </MuiThemeProvider>,
   document.getElementById('root'),
);
