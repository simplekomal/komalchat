import React, { useState } from 'react';
import Start from '../Start';
import End from '../End';
import ChatInput from './ChatInput';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { teal } from '@mui/material/colors';

const ChatbotScreen = () => {
  const [department, setDepartment] = useState('Marketing');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you can add logic to handle the bot's response
    // For example, you can simulate a bot response after a short delay
    setTimeout(() => {
      setMessages([...messages, { text: `Bot response for: ${message}`, sender: 'bot' }]);
    }, 500);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div style={{background: '#f4f4f4'}}>
      <header style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
        <Start />
      </header>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 1,
          marginBottom:1,
          
        }}
      >
       
        <Paper
          elevation={3}
          sx={{
           
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            marginTop: 2,
            background: '#f4f4f4'
          }}
        >
           <Typography variant="h4" style={{ marginBottom: '20px' }}>
                    AI ChatBot
                  </Typography>
          <Select
            value={department}
            onChange={handleDepartmentChange}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </Select>
          <ChatInput
            placeholder={`Enter your ${department.toLowerCase()} query here...`}
            onSendMessage={handleSendMessage}
          />
          <div
            className="chat-messages"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 2,
              background: '#f4f4f4'
            }}
          >
            {messages.map((msg, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  padding: 2,
                  marginY: 1,
                  backgroundColor: msg.sender === 'user' ? '#e0e0e0' : '#d9f7be',
                  borderRadius: '5px',
                }}
              >
                {msg.text}
              </Paper>
            ))}
          </div>
        </Paper>
    
      </Box>

      <footer style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
        <End />
      </footer>
    </div>
  );
};

export default ChatbotScreen;
