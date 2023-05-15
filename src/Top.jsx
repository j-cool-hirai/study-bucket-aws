import React from "react";
import topMv01 from "./assets/image/topMv01.jpg";
// import viteLogo from "/vite.svg";
import "./assets/scss/Top.scss";

function App() {
  return (
    <>
      <div className="top">
        <div className="top-mv">
          <div className="top-mv_image">
            <img src={topMv01} alt="ソースカツ丼" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
