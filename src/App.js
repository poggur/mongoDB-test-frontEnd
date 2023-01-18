import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    var loginInfo = FormData();
    loginInfo.append('name', JSON.stringify(name));
    loginInfo.append('password', JSON.stringify(password));

    fetch('http://localhost:8000/${endpoint}', {
      method: 'POST',
      mode: 'cors',
      body: loginInfo
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  };

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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input className='login-submit' type="submit" />
      </form>
    </div>
  );
}

export default App;
