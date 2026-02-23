import { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { type OrderData } from "../types/data";

interface Props {
  data?: OrderData[];
}

export default function QuantityTimeChart({ data = [] }: Props) {
  const chartOptions = useMemo(() => {
    const groupedData = data.reduce(
      (acc, order) => {
        const date = new Date(order.timestamp);

        date.setHours(0, 0, 0, 0);
        const time = date.getTime();

        if (!acc[time]) {
          acc[time] = 0;
        }
        acc[time] += order.quantity;

        return acc;
      },
      {} as Record<number, number>,
    );

    const seriesData = Object.entries(groupedData)
      .map(([time, quantity]) => [Number(time), quantity])
      .sort((a, b) => a[0] - b[0]);

    return {
      title: { text: "Ilość zamówień w czasie [1-7.10.2024]" },
      chart: {
        backgroundColor: "lightgrey",
      },
      xAxis: { type: "datetime" },
      yAxis: {
        title: { text: "Ilość" },
      },
      series: [
        {
          name: "Ilość zamówionych produktów",
          data: seriesData,
          type: "column",
          color: "black",
        },
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
