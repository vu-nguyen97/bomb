import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const thList = [
  { title: "Allocation type", priority: 1, name: "allocation" },
  { title: "Tokens", priority: 1, name: "token" },
  { title: "Pecentage", priority: 2, name: "pecentage" },
  { title: "Vesting plan", priority: 3, name: "vesting_plan" },
];

const tableDataList = [
  [
    "Seed Round",
    "30,000,000",
    "3%",
    "TGE 5%, lock for 3 months, then monthly over 18 months",
  ],
  [
    "Private Sale",
    "100,000,000",
    "10%",
    "TGE 5%, lock for 3 months, then monthly over 24 months",
  ],
  ["Public Sale", "10,000,000", "1%", "100% at TGE"],
  ["DEX Liquidity", "50,000,000", "5%", "Full locked for 12 months"],
  [
    "Advisor",
    "30,000,000",
    "3%",
    "Lock for 6 months, then monthly over 12 months",
  ],
  [
    "Community Fund",
    "120,000,000",
    "12%",
    "0.5% first launch, lock for 6 months, then quarterly over 36 months",
  ],
  [
    "Falcon Team",
    "210,000,000",
    "21%",
    "TGE 3%, lock for 12 months, then quarterly over 48 months",
  ],
  [
    "Play To Earn",
    "230,000,000",
    "23%",
    "5% first launch, then quarterly over 60 months",
  ],
  [
    "Staking Reward",
    "220,000,000",
    "22%",
    "5% first launch, then quarterly over 60 months",
  ],
  ["Total Supply", "1,000,000,000", "100%", " "],
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
      borderWidth: 0,
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
    <section className="Pitchdeck d-flex align-items-center justify-content-center">
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <div className="row my-5">
          <div className="col-lg-4 col-12 d-flex flex-column justify-content-start align-items-center">
            <div className="h5 m-0 text-font">Distribution planning</div>
            <div className="Pitchdeck-chart w-100">
              <Doughnut data={chartData} options={options} />
            </div>
          </div>

          <div className="Pitchdeck-table col-lg-8 col-12">
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
        </div>
      </div>
    </section>
  );
}

export default Distribution;
