import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Vedio from "./assets/home-bg-desktop.mp4";
import photo from "./assets/photo.png";
import photo2 from "./assets/photo2.png";
import photo1 from "./assets/symbol.svg";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import { MdGroups } from "react-icons/md";
import Enqueryforms from "./components/Enqueryforms";
import Question from "./components/Question";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="position-relative overflow-hidden text-center bg-body-tertiary">
          {/* Background Video */}
          <video
            className=" w-100  "
            autoPlay
            loop
            muted
            playsInline
            style={{ height: "80vh", objectFit: "cover" }}
          >
            <source src={Vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row featurette bg-primary-subtle w-80">
          <div className="col-md-7 order-md-2 d-flex align-items-center bg-blue">
            <div>
              <h2 className="featurette-heading fw-normal lh-1">
                Unlock Your Business Potential with Digital Marketing
              </h2>
              <p className="lead">
                In today's fast-paced digital world, a strong online presence is
                essential for business success. Digital marketing is the key to
                reaching your target audience, building brand awareness, and
                driving measurable results.
              </p>
            </div>
          </div>
          <div className="col-md-5 order-md-1 d-flex align-items-center justify-content-center">
            <img
              src={photo}
              alt="Feature Image"
              className="featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <Card />
      <div className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
            <h2>Our Clients</h2>
            <img src={photo1} alt="Feature Image" />
            <img src={photo1} alt="Feature Image" />
            <img src={photo1} alt="Feature Image" />
            <img src={photo1} alt="Feature Image" />
          </div>
        </div>
      </div>
      <Section />
      <Section2 />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-11 text-left">
            <p className="fw-bold fs-30 text-dark">Why We're Different</p>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col">
            <div className="card shadow-lg rounded-3 p-3 h-100">
              <div className="card-body text-left">
                <div
                  className="card border-0 shadow-sm bg-light"
                  style={{ width: "80px", height: "80px" }}
                >
                  <div className="card-body d-flex justify-content-center align-items-left">
                    <MdGroups size={40} className="text-primary" />
                  </div>
                </div>
                <p className="card-text text-muted">Data-Driven Strategie</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg rounded-3 p-3 h-100">
              <div className="card-body text-left">
                <div
                  className="card border-0 shadow-sm bg-light"
                  style={{ width: "80px", height: "80px" }}
                >
                  <div className="card-body d-flex justify-content-center align-items-left">
                    <MdGroups size={40} className="text-primary" />
                  </div>
                </div>
                <p className="card-text text-muted">Proven Track Record</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg rounded-3 p-3 h-100">
              <div className="card-body text-left">
                <div
                  className="card border-0 shadow-sm bg-light"
                  style={{ width: "80px", height: "80px" }}
                >
                  <div className="card-body d-flex justify-content-center align-items-left">
                    <MdGroups size={40} className="text-primary" />
                  </div>
                </div>
                <p className="card-text text-muted">Client-Centric Approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Digital marketing process*/}

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 text-left">
            <p className="fw-bold fs-30 text-dark">Digital Marketing Process</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-left">
          <div>
            <h3>1. Discovery and Goal setting</h3>
            <p>
              <ul>
                <li>
                  understand the client's business, industry, and objectives
                </li>
                <li>
                  Identify the target audience, key comprtitors, and current
                  digital presence.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h3>3. Discovery and Goal setting</h3>
            <p>
              <ul>
                <li>
                  understand the client's business, industry, and objectives
                </li>
                <li>
                  Identify the target audience, key comprtitors, and current
                  digital presence.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div> */}

      {/* image box */}
      <div>
  <div className="row featurette">
    {/* Left-aligned Text Section */}
    <div className="col-md-7 order-md-2 d-flex align-items-start text-start ps-5">
      <div className="pt-4">
        <h2 className="featurette-heading fw-bold mt-3">
          Ready to Grow Your Business?
        </h2>
        
        <p className="lead pt-3 ms-2 text-start">
          Let's build your digital presence together. Whether you need a
          full-service digital marketing partner or help with a specific
          aspect of your strategy, we're here to help.
        </p>
        <p className="lead ms-2 text-start">
          Contact us today for a free consultation and start your journey
          to digital success!
        </p>
        
      <h3>Gets Started Today !</h3>
      <button className="btn btn-danger">Book a free Counsultation</button>
      </div>
    </div>

    {/* Image Section */}
    <div className="col-md-5 order-md-1 d-flex align-items-center justify-content-center">
      <img
        src={photo2}
        alt="Feature Image"
        className="featurette-image img-fluid mx-auto"
        width="450"
        height="400"
      />
    </div>
  </div>
</div>

<Enqueryforms/>
<Question/>

      <Footer />
    </div>
  );
}

export default App;
