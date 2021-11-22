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
        "The treasure to store any burning action maked in the game like buying fee, breeding...etc. This fund wil reallocates to other funds quarterly depend on how much it stored before.",
    },
    {
      img: fund2,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "ICE ready reward player",
      btn: gameBtnGroup,
      content:
        "This funds is used to serve only purposes of gaming activity reward to our players in, along with all games recently playable on our metaverse.",
    },
    {
      img: fund3,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "ICE saved",
      btn: stakeBtn,
      content:
        "To be a player also an invester, this will be a reward to them  whose decided to belive in the evolution of ICE token, Penguin World also the Falcon team.",
    },
    {
      img: fund4,
      title: "Community Treasure",
      total: "14, 560, 589",
      note: "/8000. 000. 000 ICE allocated",
      btn: allowcationBtn,
      content:
        "This fund is created to serve the Penguin community and will be managed under Falcon team. All purpose, target and amount of using this funds will be reported clearly.",
    },
  ];

  return (
    <section className="FundInfo full-viewport d-flex align-items-center">
      <div className="container">
        <div className="text-center reveal-from-bottom" data-reveal-delay="300">
          <h2 className="mt-0 mb-16">Funds Distribution Results</h2>

          <div className="h6 mb-1">
            <div className="row">
              <div className="col-md-3 d-sm-block d-none"></div>
              <div className="col-md-6 col-sm-12">
                <div className="h6 text-color-mid my-0">
                  We creat several funds with the certain goals, which have
                  different purposes but all serve for only one mission - grow
                  up the metaverse.
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
