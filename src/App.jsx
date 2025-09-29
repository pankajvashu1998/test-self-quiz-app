import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ContextProvider from "./context/StoreContext";
import Card from "./components/Syllabus page/Card";
import Footer from "./components/Footex/Footer";



const App = () => {
  
  return (
    <div className="">
      <ContextProvider>
       
        <Card/>
        <Footer/>
      </ContextProvider>
    </div>
  );
};

export default App;
