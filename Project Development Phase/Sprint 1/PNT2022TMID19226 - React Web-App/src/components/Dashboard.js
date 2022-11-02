import React from "react";

const Dashboard = () => {
  return (
    <div>
      <iframe
        title="Node-RED Dashboard"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "hidden",
          top: 0,
          left: 0,
          position: "absolute",
        }}
        src="https://node-red-feuln-2022-10-08.au-syd.mybluemix.net/ui/#!/0?socketid=XuyFEHMazl422ecIAAA0"
      ></iframe>
    </div>
  );
};

export default Dashboard;
