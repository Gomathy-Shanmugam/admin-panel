import React from "react";
import Card from "./Card";

function Dashboard() {
  let card = [
    {
      title: "EARNINGS MONTHLY",
      icon: "calender",
      style: "primary",
      type: "currency",
    },
    {
      title: "EARNINGS MONTHLY",
      icon: "dollar-sign",
      style: "success",
      type: "currency1",
    },
    {
      title: "TASK",
      icon: "comment",
      style: "danger",
      type: "progress",
    },
    {
      title: "PENDING",
      icon: "clipboard",
      style: "primary",
      type: "number",
    },
  ];
  return (
    <>
     <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>
              <div className="row">
                {card.map((cards, index) => {
                  console.log(cards);
                  return <Card key={index} data={cards}></Card>;
                })}
              </div>
            </div>
    </>
  );
}

export default Dashboard;
