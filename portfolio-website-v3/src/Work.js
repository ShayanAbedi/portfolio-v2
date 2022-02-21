import React from "react";
import styled from "styled-components";
import covid19 from "./assets/covid19.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  margin: 120px 50px;
  border: 1px solid #708090;
  border-radius: 1rem;
  /* padding: 30px; */

  img {
    height: 500px;
    width: max-content;
  }

  @media (max-width: 900px) {
    margin: 50px 20px;
    padding: 20px;
  }
`;

const Work = () => {
  return (
    <Grid>
      <Card>
        <img src={covid19} alt="Covid-19 Tracker" />
        <div class="card-body">
          <h2>COVID-19 Tracker</h2>
          <p class="card-text">
            This website enables viewers to see the most current reports of
            Covid-19 cases in every country and within Canadian provinces. 📊
            <ul>
              <li>
                <span class="badge badge-pill badge-secondary">
                  React (Hooks & Context API)
                </span>
                <span class="badge badge-pill badge-secondary">Chart.js</span>
                <span class="badge badge-pill badge-secondary">
                  3rd Party Web APIs
                </span>
                <span class="badge badge-pill badge-secondary">
                  Deployed on now.sh
                </span>
              </li>
            </ul>
          </p>
          <a
            class="card-btn"
            target="_blank"
            href="https://github.com/ShayanAbedi/corona-tracker"
          >
            <i class="fab fa-github fa-2x"></i> Source code
          </a>
          <a
            class="card-btn"
            target="_blank"
            href="https://covidtracker.shayanabedi.com/"
          >
            <i class="fas fa-eye fa-2x"></i> View project{" "}
          </a>
        </div>
      </Card>
      <Card>
        <img
          src="./assets/MyShows.png"
          alt="Covid-19 Tracker"
          height="200"
          width="200"
        />
        <div class="card-body">
          <h2>My Shows</h2>
          <p class="card-text">
            An application to search for shows and see the information about
            them. 🎭
            <ul>
              <li>
                <span class="badge badge-pill badge-secondary">HTML5</span>
                <span class="badge badge-pill badge-secondary">CSS3</span>
                <span class="badge badge-pill badge-secondary">JavaScript</span>
                <span class="badge badge-pill badge-secondary">Bootstrap4</span>
                <span class="badge badge-pill badge-secondary">
                  3rd Party Web API
                </span>
              </li>
            </ul>
          </p>
          <a
            class="card-btn"
            target="_blank"
            href="https://github.com/ShayanAbedi/myShows"
          >
            <i class="fab fa-github fa-2x"></i> Source code
          </a>
          <a
            class="card-btn"
            target="_blank"
            href="https://shayanabedi.github.io/myShows/"
          >
            <i class="fas fa-eye fa-2x"></i> View project{" "}
          </a>
        </div>
      </Card>
    </Grid>
  );
};

export default Work;
