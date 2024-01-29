import React from 'react';
import ParentComponent from './ParentComponent';
import './App.css';
import UserContext from './UserContext';
import UserDashboard from './UserDashboard';


function App() {
  const user = { name: 'Kimani Muiruri', email: 'kimanimuiruri@gmail.com' };
  return (
    <div className="App">
      <h1>React Prop-Drilling Demo</h1>
      <ParentComponent />
      <br></br>
      <br></br>
      <h1>Context API demo</h1>
      <UserContext.Provider value={user}>
        <UserDashboard />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
