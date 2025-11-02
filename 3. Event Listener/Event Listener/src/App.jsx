function printHello(){
  console.log("Hello World");
}



function App() {
  

  return (
    <>
      <button onMouseOver={printHello}>Click Me</button>
    </>
  )
}

export default App
