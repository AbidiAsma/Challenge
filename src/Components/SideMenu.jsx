
import Button from "./Button"
function SideMenu() {
  return (
    <>
      <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
        <Button title="programming">
          <div>
            <span>🐧🐧</span>
          </div>
        </Button>
        <Button title="Data Science">
          <img
            style={{width:"70px"}}
            src="https://images.unsplash.com/photo-1516520786482-9074007bee02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </Button>
        <Button title="Technology">
          <h1>Click me</h1>
          <span>🐹🐹</span>
        </Button>
        <Button title="Self Improvement"></Button>
      </div>
    </>
  );
}

export default SideMenu