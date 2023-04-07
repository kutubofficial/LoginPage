import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [currentForm, setCurrenrtForm]= useState('login');
  const toggleForm = (forName)=>{
    setCurrenrtForm(forName);
  }
  return (
    <div className="main">
  {
  currentForm === "login" ? <Login onFormSwich={toggleForm} /> : <Register onFormSwich={toggleForm} />
  }
      
    </div>
  );
}
export default App;
