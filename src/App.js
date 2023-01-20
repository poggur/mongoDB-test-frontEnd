import './App.css';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    axios.post("http://localhost:8000/",{
      username: name,
      password: password
    })
    event.preventDefault();
  }

  return (
    <div className="App">
      <form className="inputForm" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            id='username'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            id='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input className='login-submit' type="submit" />
      </form>
    </div>
  );
}

export default App;
