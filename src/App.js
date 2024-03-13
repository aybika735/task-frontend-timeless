import React, { useState } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  const [search, setSearch] = useState("");



 
  return (
    <div className="App">
      <Header 
      search={search} 
      setSearch={setSearch} 

      />
      <MainPage 
      search={search}

      
      />
    </div>
  );
}

export default App;
