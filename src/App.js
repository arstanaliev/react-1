import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";




function App() {
  const [count,setCount] = useState(false)
  console.log(count)

  return (
    <div style={{background:count ? "red" : "cadetblue" }} className="App">
      <Header count={count} setCount={setCount}/>
      <Hero/>
    </div>
  );
}

export default App;
