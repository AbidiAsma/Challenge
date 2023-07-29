import Header from './Components/Header';
import Post from './Components/Post';
import SideMenu from './Components/SideMenu';
import './App.css';

function App() {
  const posts = [
    {
      id: 1,
      postName: "PinguCoder",
      postBody: "Platform a learning",
    },
    {
      id: 2,
      postName: "Learn javaScript",
      postBody: "with PinguCoder",
    },
    {
      id: 3,
      postName: "Learn reactJS",
      postBody: "with PinguCoder",
    }
  ];
  const postList = posts.map((post)=> {
    return <Post key={post.id} postName={post.postName} postBody={post.postBody}/>
  })
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* Post & SideMenu container */}
        <div style={{display: "flex", justifyContent: "center"}}>
          {/* Post container */}
          <div style = {{width: "70%"}}>
            {postList}
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
