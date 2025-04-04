import { PiPhoneCallFill } from "react-icons/pi";
import logo from "../assets/companylogo1.svg";

function Navbar() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* Displaying the logo as an image */}
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} alt="Company Logo" width="250" height="52" className="me-2" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-white">Our Service</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Why choose us</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Free trial</a></li>
          </ul>

          <div className="text-end">
            <p className="text-white">contact@datamatricks.com <PiPhoneCallFill /> </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
