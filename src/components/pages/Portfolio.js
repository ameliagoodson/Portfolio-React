import React from "react";
import "./Portfolio.css";

const PortfolioP = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-lg-4">
          <h2 class="project-title">What's in your fridge?</h2>
          <button class="accordion-btn">
            <img
              src={require("./Assets/port-recipe-search-crop-small.png")}
              class="img-fluid"
              id="fridge-img"
              alt="screenshot of website"
            ></img>
          </button>
          <div class="portfolio-expanded">
            <p>
              What's in your Fridge is a recipe search app with a difference:
              the user searches by ingredient. This web app is designed so that
              people can search recipes by the ingredients they already have, to
              prevent them from having to go grocery shopping, to minimise waste
              and to encourage creative cooking.
            </p>
            <a
              className="github-link"
              href="https://github.com/ameliagoodson/Recipe-search"
            >
              Github
            </a>
            <a
              className="github-site"
              href="https://ameliagoodson.github.io/Recipe-search/"
            >
              Website
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <h2 class="project-title">Coddiwomble</h2>
          <button class="accordion-btn">
            <img
              src={require("./Assets/port-coddiwomble2-small.png")}
              className="img-fluid"
              id="coddiwomble-img"
              alt="screenshot of website"
            ></img>
          </button>
          <div class="portfolio-expanded">
            <p class="portfolio-text">
              A fun holiday application that allows the user create their own
              account to save destinations to a wish-list. Users can also remove
              destinations at will from their list and view a page that displays
              a feed of destinations that other travellers want to visit.
            </p>
            <a
              className="github-link"
              href="https://github.com/ameliagoodson/Coddiwomble-destination-app"
            >
              Github
            </a>
            <a
              className="github-site"
              href="https://sleepy-temple-88858.herokuapp.com/"
            >
              Website
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <h2 class="project-title">Google News search</h2>
          <button class="accordion-btn">
            <img
              src={require("./Assets/port-news.PNG")}
              className="img-fluid"
              id="news-img"
              alt="screenshot of website"
            ></img>
          </button>
          <div class="portfolio-expanded">
            <p class="portfolio-text">
              Google News search app that allows users to search by keyword for
              local news or all related articles. Users can select number of
              articles to be displayed and filter by language or country.
            </p>
            <a
              className="github-link"
              href="https://github.com/ameliagoodson/Google-News-search"
            >
              Github
            </a>
            <a
              className="github-site"
              href="https://ameliagoodson.github.io/Google-News-search"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioP;
