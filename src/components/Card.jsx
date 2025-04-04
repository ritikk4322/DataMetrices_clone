import React from "react";
// import "./components/.App.css";
import styles from "./Card.module.css";
import symbol from "../assets/symbol.svg";
import symbol1 from "../assets/symbol1.svg";
import symbol2 from "../assets/symbol2.svg";
import symbol3 from "../assets/symbol3.svg";
import symbol4 from "../assets/symbol4.png";
import symbol12 from "../assets/ratingstar.svg";
function Card() {
  return (
    <div>
      <section style={{ backgroundColor: "rgb(232, 244, 255)" }}>
        <div className="container pt-4 pb-5">
          <p
            className={`${styles.p}`}
          >
            India's Highest Rated Web Development Company
          </p>
          <p>
            100+ Glowing 5-Star Reviews Across Top B2B Review Platforms
          </p>
        </div>

        {/* Updated row to have one single row */}
        <div className={`row ${styles.cards}`}>
          <div className="col  text-center">
            <div className={`card ${styles.cardsize} text-center`}>
              <img
                src={symbol}
                alt="Verified Badge"
                width="200"
                height="80"
                className="mx-auto"
              />

              <div className="card-body">
                <img
                  src={symbol12}
                  alt="Star Rating"
                  width="150"
                  height="50"
                  className="mb-2"
                />
                <p className="fs-3 fw-bold text-dark">4.9</p>
              </div>
            </div>
          </div>
          <div className="col  text-center">
            <div className={`card ${styles.cardsize} text-center`}>
              <img
                src={symbol1}
                alt="Verified Badge"
                width="200"
                height="80"
                className="mx-auto"
              />

              <div className="card-body">
                <img
                  src={symbol12}
                  alt="Star Rating"
                  width="150"
                  height="50"
                  className="mb-2"
                />
                <p className="fs-3 fw-bold text-dark">4.9</p>
              </div>
            </div>
          </div>
          <div className="col  text-center">
            <div className={`card ${styles.cardsize} text-center`}>
              <img
                src={symbol2}
                alt="Verified Badge"
                width="200"
                height="80"
                className="mx-auto"
              />

              <div className="card-body">
                <img
                  src={symbol12}
                  alt="Star Rating"
                  width="150"
                  height="50"
                  className="mb-2"
                />
                <p className="fs-3 fw-bold text-dark">4.9</p>
              </div>
            </div>
          </div>
          <div className="col  text-center">
            <div className={`card ${styles.cardsize} text-center`}>
              <img
                src={symbol3}
                alt="Verified Badge"
                width="200"
                height="80"
                className="mx-auto"
              />

              <div className="card-body">
                <img
                  src={symbol12}
                  alt="Star Rating"
                  width="150"
                  height="50"
                  className="mb-2"
                />
                <p className="fs-3 fw-bold text-dark">4.9</p>
              </div>
            </div>
          </div>
          <div className="col  text-center">
            <div className={`card ${styles.cardsize} text-center`}>
              <img
                src={symbol4}
                alt="Verified Badge"
                width="100"
                height="75"
                
                className="mx-auto mt-2"
              />

              <div className="card-body">
                <img
                  src={symbol12}
                  alt="Star Rating"
                  width="150"
                  height="50"
                  className="mb-2"
                />
                <p className="fs-3 fw-bold text-dark">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
