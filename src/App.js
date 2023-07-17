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
        <div style={{display: "flex", justifyContent: "center"}}>
          {/* Post container */}
          <div style = {{width: "70%"}}>
            <Post postName="PinguCoder" postBody="Platform a learning"/>
            <Post postName="learn javaScript" postBody="with PinguCoder"/>
            <Post postName="Learn reactJS" postBody="with PinguCoder"/>
            <Post />
            <Post />
          </div>
          {/* =Post container= */}

          {/* SideMenu container */}
          <div style={{width: "30%", marginTop: "25px"}}>
            <SideMenu /> 
          </div>
          {/* =Post & SideMenu container=  */}
        </div>
      </div>
    </div>
  );
}

export default App;
