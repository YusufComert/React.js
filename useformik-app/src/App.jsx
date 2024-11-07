import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import GenerelForm from "./Components/GenerelForm";
import PortalForm from "./Components/PortalForm";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<GenerelForm />} />
          <Route path="/portal" element={<PortalForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
