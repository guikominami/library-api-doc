import Sidebar from "./components/Sidebar";
import ApiDocContent from "./components/ApiDocContent";
import Overview from "./components/Overview";

import { useState } from "react";

import "./App.css";

function App() {
  const[apiDataIndex, setApiDataIndex] = useState()
  let content = "";
  
  function handleMenuClicked(item){
    setApiDataIndex(item);
    console.log(apiDataIndex);
  }
  
  if (apiDataIndex !== undefined){
    console.log("que pasa");
    content = (
      <ApiDocContent index={apiDataIndex}/>
    )
  }else{
    content = (
      <Overview />
    )
  }
  
  return (
    <main className="main-area">
      <Sidebar onMenuClicked={handleMenuClicked}/>
      <section className="content-area">
        {content}
      </section>
    </main>
  );
}

export default App;
