import logo from './logo.svg';
import './App.css';
import Splash from './component/Splash'
function App() {
  return (
    <div className="App">
      <script type="text/javascript"
        src="https://cdn.myth.theoplayer.com/0584187f-9d9b-470f-9f58-01782ee461cb/THEOplayer.js"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdn.myth.theoplayer.com/0584187f-9d9b-470f-9f58-01782ee461cb/ui.css" />
    <script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
       <div class="theoplayer-container video-js theoplayer-skin vjs-16-9" id="dplayer"></div>
      <Splash/>
    </div>
  );
}

export default App;
