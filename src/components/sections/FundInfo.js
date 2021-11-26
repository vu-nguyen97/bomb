import classNames from "classnames";
import React from "react";
import fund1 from "../../assets/images/landing-page/fund1.png";
import fund2 from "../../assets/images/landing-page/fund2.png";
import fund3 from "../../assets/images/landing-page/fund3.png";
import fund4 from "../../assets/images/landing-page/fund4.png";

const FundInfo = () => {
  const allowcationBtn = (
    <button className="btn btn-outline-primary text-truncate">
      Allowcation reports
    </button>
  );
  const stakeBtn = (
    <button className="btn btn-outline-primary text-truncate">Stake now</button>
  );
  const gameBtnGroup = (
    <>
      {allowcationBtn}
      <button className="btn btn-outline-primary ms-2 text-truncate">
        Play now
      </button>
    </>
  );

  const FundList = [
    {
      img: fund1,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "ICE saved",
      btn: allowcationBtn,
      content:
        "All ICE burning actions in game (Trade, breeding fees, etc) will be stored in the treasury. This fund will be reallocated to other funds on a quarterly basis depending on the amount of tokens that it contains.",
    },
    {
      img: fund2,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "ICE ready reward player",
      btn: gameBtnGroup,
      content:
        "This fund's purpose is to reward our players from completing activities in any game playable in our metaverse.",
    },
    {
      img: fund3,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "ICE saved",
      btn: stakeBtn,
      content:
        "To be a player is also to be an invester. The staking pool serves as a reward to our players who have decided to believe in the evolution of the ICE token, Penguin World and also the Falcon team.",
    },
    {
      img: fund4,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "/8000. 000. 000 ICE allocated",
      btn: allowcationBtn,
      content:
        "This fund is created to maintain the Penguin community and will be managed by the Falcon team. All purposes, targets and spendings using this fund will be transaprently communicated to the community.",
    },
  ];

  return (
    <section
      className="FundInfo full-viewport d-flex align-items-center"
      id="iceToken"
    >
      <div className="container mb-5">
        <div className="text-center reveal-from-bottom" data-reveal-delay="300">
          <h2 className="mt-0 mb-16">Funds Distribution</h2>

          <div className="h6 mb-1">
            <div className="row">
              <div className="col-md-3 d-sm-block d-none"></div>
              <div className="col-md-6 col-sm-12">
                <div className="h6 text-color-mid my-0">
                  Several funds are set up with specific goals in mind, but all
                  are here to serve for only one purpose; to grow our metaverse.
                </div>
              </div>
              <div className="col-md-3 d-sm-block d-none"></div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="row text-color-mid">
            {FundList.map((item, id) => (
              <div
                className={classNames("col-md-6 col-xs-12 mt-4", {
                  "reveal-from-left": id % 2 === 0,
                  "reveal-from-right": id % 2 === 1,
                })}
                data-reveal-delay="300"
                key={id}
              >
                <div className="border p-2 h-100 rounded">
                  <div className="row h-100">
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={item.img}
                        className="img-size"
                        alt={`fund ${id}`}
                      />
                      <h6 className="mb-0 mt-2">{item.total}</h6>
                      <div className="font-size-12 text-center">
                        {item.note}
                      </div>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="mt-0">{item.title}</h5>
                        <div>{item.content}</div>
                      </div>
                      <div className="d-flex justify-content-end mt-2">
                        {item.btn}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundInfo;
