import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./Data";

function App() {
  const cards = data.map((journal) => {
    return <Card key={journal.id} {...journal} />;
  });
  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
