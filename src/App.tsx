import "./App.css";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("/database/data.json");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};




function App() {
  return <>Hi</>;
}

export default App;
