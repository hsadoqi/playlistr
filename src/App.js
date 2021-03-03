import './App.css';
import PlaylistsContainer from './containers/PlaylistsContainer'

function App() {
  return (
    <div id="main-container">
      <nav id="playlist-nav">
        <h1>Playlistr</h1>
      </nav>
      <PlaylistsContainer/>
    </div>
  );
}



export default App;
