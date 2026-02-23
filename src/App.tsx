import "./App.css";
import { useQuery } from "@tanstack/react-query";
import IncomeTimeChart from "./components/IncomeTimeChart";
import QuantityTimeChart from "./components/QuantityTimeChart";
import CountryQuantityChart from "./components/CountryQuantityChart";
import { type Data } from "./types/data.js";

const fetchData = async () => {
  const res = await fetch("/database/data.json");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};

function App() {
  const { data, isLoading, error } = useQuery<Data>({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error.message}</div>;

  return (
    <main>
      <IncomeTimeChart data={data?.orders} />
      <QuantityTimeChart data={data?.orders} />
      <CountryQuantityChart data={data?.orders} />
    </main>
  );
}

export default App;
