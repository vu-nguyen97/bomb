import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const thList = [
  { title: "Allocation type", priority: 1, name: "allocation" },
  { title: "Tokens", priority: 1, name: "token" },
  { title: "Pecentage", priority: 2, name: "pecentage" },
  { title: "TGE percentage", priority: 3, name: "tge" },
  {
    title: "Full locked duration (months)",
    priority: 2,
    name: "duration",
  },
  { title: "Vesting period (months)", priority: 2, name: "vesting_period" },
  { title: "Vesting type", priority: 3, name: "vesting type" },
];

const tableDataList = [
  ["Seed Round", "30,000,000", "3%", "5%", 3, 18, "Monthly"],
  ["Private Sale", "100,000,000", "10%", "5%", 3, 24, "Monthly"],
  ["Public Sale", "10,000,000", "1%", "100%", " ", " ", " "],
  ["DEX Liquidity", "50,000,000", "5%", " ", 12, " ", " "],
  ["Advisor", "30,000,000", "3%", " ", 6, 12, "Monthly"],
  ["Community Fund", "120,000,000", "12%", "0.5%", 6, 36, "Quarterly"],
  ["Falcon Team", "210,000,000", "21%", "3%", 12, 48, "Quarterly"],
  ["Play To Earn", "230,000,000", "23%", "5%", " ", 60, "Quarterly"],
  ["Staking Reward", "220,000,000", "22%", "5%", " ", 60, "Quarterly"],
  ["Total Supply", "1,000,000,000", "100%", " ", " ", " ", " "],
];

const chartData = {
  labels: [
    "Seed Round",
    "Private Sale",
    "Public Sale",
    "DEX Liquidity",
    "Advisor",
    "Community Fund",
    "Falcon Team",
    "Play To Earn",
    "Staking Reward",
  ],
  datasets: [
    {
      data: [3, 10, 1, 5, 3, 12, 21, 23, 22],
      backgroundColor: [
        "rgb(19, 141, 117)",
        "rgb(52, 195, 143)",
        "rgb(85, 110, 230)",
        "rgb(93, 173, 226)",
        "rgb(30, 132, 73)",
        "rgb(27, 79, 114)",
        "rgb(24, 106, 59)",
        "rgb(21, 67, 96)",
        "rgb(69, 179, 157)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "#dbeae8",
        padding: 15,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const { label, parsed } = context || "";

          return `${label}: ${parsed}%`;
        },
      },
    },
  },
};

function Distribution() {
  return (
    <section className="Pitchdeck full-viewport d-flex flex-column justify-content-end">
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <div className="row">
          <div className="col-2 d-none d-md-block" />
          <div className="col-md-6 col-xs-12">
            <div className="h5 mb-0 text-font">Distribution planning</div>
            <div className="Pitchdeck-chart">
              <Doughnut data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="Pitchdeck-table container py-5 w-100 reveal-from-bottom"
        data-reveal-delay="200"
      >
        <Table
          id="tech-companies-1"
          className="table table-striped table-bordered mb-0"
        >
          <Thead>
            <Tr>
              {thList.map((item, id) => (
                <Th data-priority={item.priority} key={id}>
                  {item.title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableDataList.map((data, dataId) => (
              <Tr key={dataId}>
                {data.map((field, id) => (
                  <Td key={id}>{field}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </section>
  );
}

export default Distribution;
