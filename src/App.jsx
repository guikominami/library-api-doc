import Sidebar from "./components/Sidebar";
import ApiDocContent from "./components/ApiDocContent";
import { useState } from "react";

import "./App.css";

function App() {
  const[apiDataIndex, setApiDataIndex] = useState(0)
  
  console.log("atualizou")

  function handleMenuClicked(item){
    console.log("clicou");
    console.log(item);
    setApiDataIndex(item);
  }
  
  return (
    <main className="main-area">
      <Sidebar onMenuClicked={handleMenuClicked}/>
      <section className="content-area">
        <ApiDocContent index={apiDataIndex}/>
      </section>
    </main>
  );
}

export default App;
