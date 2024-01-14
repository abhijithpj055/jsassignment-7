import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className ="App">
      <h2>Login</h2>
      <form>
       <h3>Username</h3>
       <input className="txt" type="text" placeholder="Enter Username" name="uname" required></input>
       <h3>Password</h3>
       <input className="pwd" type="password" placeholder="Enter Password" name="psw" required></input><br></br>
    
       <button className ="btn" type="submit">Login</button>
      </form>
      
    </div>
  );
}

export default App;
