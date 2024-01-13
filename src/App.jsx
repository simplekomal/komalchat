import React, { useState } from 'react';
import Login from './Login';
import ChatbotScreen from './components/ChatbotScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <ChatbotScreen />
      ) : (
        <Login onLogin={handleSuccessfulLogin} />
      )}
    </div>
  );
}

export default App;
