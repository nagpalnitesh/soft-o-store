import React from "react";
import bgVideo from "../../assets/videos/bgtunnel.mp4"
import "./home.css";

export default function Home() {
  return (
    <div className="container-fluid home">
      {/* Background */}
      <div className="overlay"></div>
      <div className="bgvideo">
        <video autoPlay loop muted>
          <source src={bgVideo} />
        </video>
      </div>
      {/* Main */}
      <div className="homeinner">
        <div className="homecnt">
          <div className="hometitletxt">
            <h1>Soft-o-Store</h1>
          </div>
          <div className="hometag">
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
