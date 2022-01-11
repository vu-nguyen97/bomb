import React from "react";
import checkpoin1 from "../../assets/images/roadmap/roadmap-icon-1.png";
import checkpoin2 from "../../assets/images/roadmap/roadmap-icon-2.png";
import checkpoin3 from "../../assets/images/roadmap/roadmap-icon-3.png";
import checkpoin4 from "../../assets/images/roadmap/roadmap-icon-4.png";
import checkpoin5 from "../../assets/images/roadmap/roadmap-icon-5.png";
import checkpoin6 from "../../assets/images/roadmap/roadmap-icon-6.png";
import pixel from "../../assets/images/partern-pixel.png";

function RoadMap() {
  const roadData = [
    {
      name: "Q4-2021",
      img: checkpoin1,
      content: ["Landing page", "Pitchdeck", "Tokenomics"],
    },
    {
      name: "Q1-2022",
      img: checkpoin2,
      content: [
        "Testnet launch gameplay",
        "Testnet launch Marketplace",
        "IDO",
        "NFT Items Box first sale",
        "Community bootstrap",
        "Whitepaper",
        "Airdrop campaign",
      ],
    },
    {
      name: "Q2-2022",
      img: checkpoin3,
      content: [
        "Official Launch In-game",
        "Official Launch Marketplace",
        "New League release",
        "Craft Consumable Item release",
        {
          "Play to earn:": ["Daily quest", "Farm gameplay", "Boom PVP & PVE"],
        },
      ],
    },
    {
      name: "Q3-2022",
      img: checkpoin4,
      content: [
        "World map release",
        "Land first sale",
        "Demo landlord gameplay",
        "Tournament kickstart",
        "PXC staking",
        "Pet racing arena release",
        "In-game social features",
      ],
    },
    {
      name: "Q4-2022",
      img: checkpoin5,
      content: [
        "Dungeon & Campaign release",
        "Craft Equipment Item release",
        "World Jobs release",
      ],
    },
    {
      name: "Q1-2023",
      img: checkpoin6,
      content: [
        "Nation War map release",
        { "Guild gameplay:": ["Warzone", "Invade mode"] },
      ],
    },
  ];

  return (
    <section className="RoadMap page-section" id="roadmap">
      <div className="py-3">
        <div className="mb-3 text-font text-center text-blue reveal-from-bottom">
          ROAD MAP
        </div>

        <div className="RoadMap-wrapper mx-5">
          <div className="row">
            {roadData.map((obj, roadId) => (
              <div
                className="RoadMap-content col-xl-2 col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center mb-2 reveal-from-bottom"
                key={roadId}
              >
                <img
                  src={obj.img}
                  alt={obj.name}
                  className={`img-size tree-${roadId + 1} img-contain mb-3`}
                />

                <div className="RoadMap-content-title font-size-16 mb-3 text-font">
                  {obj.name}
                </div>
                <ul className="RoadMap-content-line text-font font-size-9">
                  {obj.content.map((item, id) => {
                    let contentComp;
                    if (typeof item !== "object") {
                      contentComp = <li>{item}</li>;
                    } else {
                      contentComp = (
                        <>
                          <li key={id}>{Object.keys(item)[0]}</li>

                          {Object.values(item)[0].map((subItem, index) => {
                            return (
                              <div
                                key={index}
                                className="sub-content mb-1 ms-2"
                              >
                                - {subItem}
                              </div>
                            );
                          })}
                        </>
                      );
                    }

                    return (
                      <React.Fragment key={id}>{contentComp}</React.Fragment>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="RoadMap-pixel">
        <img src={pixel} className="w-100 h-100 img-contain" alt="pixel" />
      </div>
    </section>
  );
}

export default RoadMap;
