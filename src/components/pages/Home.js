import React from "react";
import "./Home.css";

const Home = () => (
  <div className="jumbotron">
    <h1 className="heading">Looking for a web developer?</h1>
    <p className="home-text">
      Hi, I'm Amelia. I design beautiful and functional websites.
    </p>
    <button className="btn-see">
      {/* <a
        href="#portfolio"
        onClick={() => props.handlePageChange("Portfolio")}
        className={
          props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
        }
      >
        See what I can do
      </a> */}
    </button>
  </div>
);

export default Home;
