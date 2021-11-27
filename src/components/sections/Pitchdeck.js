import React from "react";
import DonutChat from "../../assets/images/landing-page/pitchdeck/donut-chat.png";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import classNames from "classnames";

const thList = [
  { title: "Allocation type", priority: 1, name: "allocation" },
  { title: "Tokens", priority: 1, name: "token" },
  { title: "Pecentage", priority: 2, name: "pecentage" },
  { title: "TGE percentage", priority: 3, name: "tge" },
  {
    title: "Full locked duration (months)",
    priority: 2,
    name: "duration",
    isTwoLines: true,
  },
  { title: "Vesting period (months)", priority: 2, name: "vesting_period" },
  { title: "Vesting type", priority: 3, name: "vesting type" },
];

const dataList = [
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

function Pitchdeck() {
  return (
    <section
      className="Pitchdeck page-section full-viewport d-flex flex-column justify-content-end"
      id="pitchdeck"
    >
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <div className="h5 m-0 text-font">Distribution planning</div>
          <img src={DonutChat} className="Pitchdeck-img" alt="donut chat" />
        </div>
      </div>

      <div
        className="Pitchdeck-table w-100 reveal-from-bottom"
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
            {dataList.map((data, dataId) => (
              <Tr key={dataId}>
                {data.map((field, id) => (
                  <Td
                    key={id}
                    className={classNames({ "text-truncate2": true })}
                  >
                    {field}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </section>
  );
}

export default Pitchdeck;
