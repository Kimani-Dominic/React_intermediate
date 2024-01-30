import React from 'react';
import './App.css';
//Prop drilling component
import ParentComponent from './ParentComponent';
//context API components
import UserContext from './UserContext';
import UserDashboard from './UserDashboard';
//UseReducer and Custom hooks components
import Counter from './Counter';
import useFetch from './useFetch';

function App() {
  const user = { name: 'Kimani Muiruri', email: 'kimanimuiruri@gmail.com' };
  //custom hook
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
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
      <h1>State Management Demo</h1>
      <Counter />
      {loading ? <p>Loading...</p> : <p>Title: {data.title}</p>}
      
    </div>
  );
}

export default App;
