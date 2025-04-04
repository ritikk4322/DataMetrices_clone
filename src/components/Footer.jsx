import imgfooter from "../assets/footerimg.svg";
import logo from "../assets/companylogo1.svg";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${imgfooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "3px solid rgb(239, 247, 251)",
        width: "100%",
      }}
    >
      <div className="container-fluid px-5">
        <div className="row row-cols-1 row-cols-md-4 text-white">
          <div className="col m-5 fs-4 fw-bold p-1">
            <img
              src={logo}
              alt="Company Logo"
              width="250"
              height="80"
              className="mb-3"
            />
            <h5 className="fs-3 fw-bold">Reach Out to Us at</h5>

            <h4>Head Office (India):</h4>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <CiLocationOn /> ITHUM TOWER, Block A, Industrial Area, Sector 62,
              Noida, Uttar Pradesh 201309;
            </p>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <CgMail /> contact@datametricks.com
            </p>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <IoCallOutline /> +91 73039 46657
            </p>

            <h4>Regional Office (Europe):</h4>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <CiLocationOn /> Vanåsgatan 132, 216 20 Malmö, Sweden
            </p>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <CgMail /> contact@datametricks.com
            </p>
            <p className="fw-400 fs-16" style={{ color: "rgb(178, 178, 178)" }}>
              <IoCallOutline /> +46 73 610 97 57
            </p>

            <button
              type="button"
              className="btn btn-sm mt-3"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "16px",
                border: "none",
                padding: "6px 12px",
              }}
            >
              Download Our Portfolio
            </button>
          </div>

          <div className="col my-4 fs-4">
            <h5 className="fs-3 fw-bold">DataMetricks</h5>
            <ul className="nav flex-column">
              {[
                "Blogs",
                "Careers",
                "About Us",
                "Our Team",
                "Contact Us",
                "Our Projects",
                "Privacy & Policy",
                "Terms and Conditions",
              ].map((item, index) => (
                <li key={index} className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col my-4 fs-4">
            <h5 className="fs-3 fw-bold">Our Services</h5>
            <ul className="nav flex-column">
              {[
                "Digital Marketing",
                "Graphic Designing",
                "Web Development",
                "Social Media Marketing",
                "Performance Marketing",
                "Mobile App Development",
                "SEO (Search Engine Optimization)",
              ].map((service, index) => (
                <li key={index} className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col my-4 fs-4">
            <h5 className="fs-3 fw-bold">Follow Us</h5>
            <ul className="nav flex-column">
              {[
                { icon: <FaLinkedin />, name: "LinkedIn" },
                { icon: <FaSquareInstagram />, name: "Instagram" },
                { icon: <FaFacebook />, name: "Facebook" },
                { icon: <FaSquareXTwitter />, name: "Twitter" },
              ].map((social, index) => (
                <li key={index} className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    {social.icon} {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="h-1 mx-auto" style={{ color: "white", width: "94%" }} />
        <p
          className="fs-16 text-center"
          style={{ color: "rgb(249, 244, 244)" }}
        >
          © DataMetricks Consulting Pvt. Ltd. 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
