// components/ChatInput.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';

const ChatInput = ({ placeholder, onSendMessage }) => {
  const [userInput, setUserInput] = React.useState('');

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      onSendMessage(userInput);
      setUserInput('');
    }
  };

  return (
    <div style={{}}>
    <div style={{ padding: '2px', margin: '1px', textAlign: 'center'  }}>
      <TextField
        fullWidth
        variant="outlined"
        label={placeholder}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        margin="normal"
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSendMessage}
        style={{ backgroundColor: teal[200], color: '#010101' }}
      >
        Send
      </Button>
    </div>
    </div>
  );
};

export default ChatInput;
