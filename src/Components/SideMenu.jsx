
import Button from "./Button"
function SideMenu() {
  const categories = [
    {
      id: 1,
      title: "Programming",
      children: (
        <div>
          <span>🐧🐧</span>
        </div>
      ),
    },
    {
      id: 2,
      title: "Data Science",
      children: (
        <img
          style={{ width: "70px" }}
          src="https://images.unsplash.com/photo-1516520786482-9074007bee02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      ),
    },
    {
      id: 3,
      title: "Technology",
      children: (
        <>
          <h2>Click me</h2>
          <span>🐹🐹</span>
        </>
      ),
    },
    {
      id: 4,
      title: "Self Improvement",
    },
  ];
  const categoriesList = categories.map((cat)=>{
    return <Button key={cat.id} title={cat.title}>
      {cat.children}
    </Button>
  })
  return (
    <>
      <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
        {categoriesList}
      </div>
    </>
  );
}

export default SideMenu