import React, { useState } from 'react';
import Start from './Start';
import End from './End';
import Backdiv from './Backdiv';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { teal } from '@mui/material/colors';

export default function Login({ onLogin }) {
  const bt = teal[500];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (username === 'user123' && password === 'pass123') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div style={{background: '#f4f4f4'}}>
        {/* Header */}
        <header style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
          <Start />
        </header>

        <main style={{background: '#f4f4f4'}}>
          <div style={{ display: 'flex', flexDirection: 'row', height: '400px', padding: '20px' }}>
            <div style={{ flex: 1, backgroundColor: '#DEF2F1' }}>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <br />
                <br />
                <div className="login">
                  <Typography variant="h3" style={{ marginBottom: '20px' }}>
                    Login
                  </Typography>

                  <form onSubmit={handleLogin}>
                    <TextField
                      id="outlined-username"
                      label="Username"
                      variant="outlined"
                      size="small"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <br />
                    <TextField
                      id="outlined-password"
                      label="Password"
                      variant="outlined"
                      size="small"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" style={{ backgroundColor: teal[200], color: '#010101' }}>
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, backgroundColor: 'blue' }}>
              <Backdiv />
            </div>
          </div>
        </main>

        <footer style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
          <End />
        </footer>
      </div>
    </>
  );
}
