import Header from './Components/Header';
import Post from './Components/Post';
import SideMenu from './Components/SideMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* Post & SideMenu container */}
        <div style={{display: "flex", }}>
          {/* Post container */}
          <div style = {{width: "70%"}}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* =Post container= */}

          {/* SideMenu container */}
          <div style={{width: "30%"}}>
            <SideMenu /> 
          </div>
          {/* =Post & SideMenu container=  */}
        </div>
      </div>
      
    </div>
  );
}

export default App;
