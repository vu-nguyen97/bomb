import React from "react";
import checkpoin1 from "../../assets/images/landing-page/roadmap/checkpoint-1.png";
import checkpoin2 from "../../assets/images/landing-page/roadmap/checkpoint-2.png";
import checkpoin3 from "../../assets/images/landing-page/roadmap/checkpoint-3.png";
import checkpoin4 from "../../assets/images/landing-page/roadmap/checkpoint-4.png";
import checkpoin5 from "../../assets/images/landing-page/roadmap/checkpoint-5.png";
import checkpoin6 from "../../assets/images/landing-page/roadmap/checkpoint-6.png";

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
        "Genesis Penguin first sale",
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
        "Breeding Penguin release",
        "Forging Equipment release",
        {
          "Play to earn:": [
            "Daily quest",
            "Dungeon gameplay",
            "Arena gameplay",
          ],
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
        "ICE staking",
        "1 versus all mode (Arena)",
        "In-game social features",
      ],
    },
    {
      name: "Q4-2022",
      img: checkpoin5,
      content: [
        "Landlord gameplay release",
        "Penguin health system release",
        "Penguin’s Jobs release",
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
      <div className="RoadMap-wrapper py-3">
        <div className="h4 mt-0 text-font text-center reveal-from-bottom">
          Roadmap
        </div>

        <div className="mx-5">
          <div className="row">
            {roadData.map((obj, roadId) => (
              <div
                className="col-xl-2 col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center mb-2 reveal-from-bottom"
                key={roadId}
              >
                <img src={obj.img} alt={obj.name} className="img-size" />

                <div className="h6 m-0 text-font">{obj.name}</div>
                <ul>
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
                                {subItem}
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
    </section>
  );
}

export default RoadMap;
