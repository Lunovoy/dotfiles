import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={mockData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;

let mockData = [
  {
    id: "2020",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Январь",
        y: 101,
      },
      {
        x: "Февраль",
        y: 75,
      },
      {
        x: "Март",
        y: 36,
      },
      {
        x: "Апрель",
        y: 216,
      },
      {
        x: "Май",
        y: 35,
      },
      {
        x: "Июнь",
        y: 236,
      },
      {
        x: "Июль",
        y: 88,
      },
      {
        x: "Август",
        y: 232,
      },
      {
        x: "Сентябрь",
        y: 281,
      },
      {
        x: "Октябрь",
        y: 1,
      },
      {
        x: "Ноябрь",
        y: 35,
      },
      {
        x: "Декабрь",
        y: 14,
      },
    ],
  },
  {
    id: "2021",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Январь",
        y: 212,
      },
      {
        x: "Февраль",
        y: 190,
      },
      {
        x: "Март",
        y: 270,
      },
      {
        x: "Апрель",
        y: 9,
      },
      {
        x: "Май",
        y: 75,
      },
      {
        x: "Июнь",
        y: 175,
      },
      {
        x: "Июль",
        y: 33,
      },
      {
        x: "Август",
        y: 189,
      },
      {
        x: "Сентябрь",
        y: 97,
      },
      {
        x: "Октябрь",
        y: 87,
      },
      {
        x: "Ноябрь",
        y: 299,
      },
      {
        x: "Декабрь",
        y: 251,
      },
    ],
  },
  {
    id: "2022",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Январь",
        y: 191,
      },
      {
        x: "Февраль",
        y: 136,
      },
      {
        x: "Март",
        y: 91,
      },
      {
        x: "Апрель",
        y: 190,
      },
      {
        x: "Май",
        y: 211,
      },
      {
        x: "Июнь",
        y: 152,
      },
      {
        x: "Июль",
        y: 189,
      },
      {
        x: "Август",
        y: 152,
      },
      {
        x: "Сентябрь",
        y: 8,
      },
      {
        x: "Октябрь",
        y: 197,
      },
      {
        x: "Ноябрь",
        y: 107,
      },
      {
        x: "Декабрь",
        y: 170,
      },
    ],
  },
];
