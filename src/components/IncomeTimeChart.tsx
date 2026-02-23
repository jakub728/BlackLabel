import { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { type OrderData } from "../types/data";

interface Props {
  data?: OrderData[];
}

export default function IncomeTimeChart({ data = [] }: Props) {
  const chartOptions = useMemo(() => {
    const groupedData = data.reduce(
      (acc, order) => {
        const country = order.country;
        const total = order.quantity * order.unitPrice;

        if (!acc[country]) {
          acc[country] = 0;
        }
        acc[country] += total;

        return acc;
      },
      {} as Record<string, number>,
    );

    const seriesData = Object.entries(groupedData).map(([name, value]) => ({
      name: name,
      y: value,
    }));

    return {
      chart: { type: "pie" },
      title: { text: "Udział krajów w przychodzie [1-7.10.2024]" },
      tooltip: {
        pointFormat:
          "{series.name}: <b>{point.y:.2f} PLN</b> ({point.percentage:.1f}%)",
      },
      accessibility: { point: { valueSuffix: "%" } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Przychód",
          colorByPoint: true,
          data: seriesData,
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
