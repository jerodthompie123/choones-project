
import './App.css';
import Header from './SpotifyAPI/Header';
import Navbar from './SpotifyAPI/Navbar';
import Main from './SpotifyAPI/Main';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <Navbar/>
        <Main/>
      </div>
      
    </div> 
  );
}


export default App;
