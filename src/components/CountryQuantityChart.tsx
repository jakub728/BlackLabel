import { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { type OrderData } from "../types/data";

interface Props {
  data?: OrderData[];
}

export default function CountryQuantityChart({ data = [] }: Props) {
  const chartOptions = useMemo(() => {
    const groupedData = data.reduce(
      (acc, order) => {
        const country = order.country;
        const device = order.device;

        if (!acc[country]) {
          acc[country] = { desktop: 0, mobile: 0, tablet: 0 };
        }

        if (
          device === "desktop" ||
          device === "mobile" ||
          device === "tablet"
        ) {
          acc[country][device] += order.quantity;
        }

        return acc;
      },
      {} as Record<string, { desktop: number; mobile: number; tablet: number }>,
    );

    const countries = Object.keys(groupedData).sort();
    const desktopData = countries.map((c) => groupedData[c].desktop);
    const mobileData = countries.map((c) => groupedData[c].mobile);
    const tabletData = countries.map((c) => groupedData[c].tablet);

    return {
      chart: { type: "column" },
      title: { text: "Ilość zamówień wg kraju i urządzenia [1-7.10.2024]" },
      xAxis: {
        categories: countries,
        title: { text: "Kraj" },
      },
      yAxis: {
        title: { text: "Suma sztuk" },
        stackLabels: { enabled: true },
      },
      plotOptions: {
        column: {
          stacking: "data",
          dataLabels: { enabled: true },
        },
      },
      series: [
        { name: "Desktop", data: desktopData, color: "#7cb5ec" },
        { name: "Mobile", data: mobileData, color: "#434348" },
        { name: "Tablet", data: tabletData, color: "#90ed7d" },
      ],
      credits: {
        enabled: false,
      },
    };
  }, [data]);

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
