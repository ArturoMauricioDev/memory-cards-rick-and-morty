import { useEffect } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { getData } from "./utils/getData";
import "./App.css";

function App() {
  let data;
  useEffect(() => {
    data = getData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}

export default App;
