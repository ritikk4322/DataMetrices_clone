function Enqueryforms() {
    return (
      <div className="py-4" style={{ backgroundColor: "rgb(242, 242, 242)", position: "relative" }}>
        <div style={{ position: "absolute", right: "7%", bottom: "87%" }}>
          <img
            src="https://d3vqz9qyn2r1xe.cloudfront.net/imges/response-img.svg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="container">
          <form>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5">
                <img
                  src="https://d3vqz9qyn2r1xe.cloudfront.net/imges/men-formimg.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7">
                <p className="fw-800 fs-30 plus">What can we help you with?</p>
                <div className="row pt-1">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="fname"
                      name="name"
                      placeholder="Full Name *"
                      required
                      className="fs-13 plus px-3 w-100"
                      style={{ height: "51px", borderRadius: "7px", border: "none", outline: "none" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email *"
                      required
                      className="fs-13 plus px-3 w-100"
                      style={{ height: "51px", borderRadius: "7px", border: "none", outline: "none" }}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="fs-13 plus px-3 w-100"
                      style={{ height: "51px", borderRadius: "7px", border: "none", outline: "none" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="message"
                      placeholder="Company"
                      required
                      className="fs-13 plus px-3 w-100"
                      style={{ height: "51px", borderRadius: "7px", border: "none", outline: "none" }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Your Message / Requirements "
                      className="fs-13 plus px-3 py-3 w-100"
                      style={{ height: "115px", borderRadius: "7px", border: "none", outline: "none", maxHeight: "115px" }}
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="btn btn-sm mont"
                    style={{ fontSize: "16px", fontWeight: "700", backgroundColor: "rgb(0, 83, 154)", color: "white", borderRadius: "5px", padding: "12px 60px" }}
                  >
                    Send Your Query
                  </button>
                  <div className="d-flex justify-content-center gap-4">
                    <div className="d-flex gap-2">
                      <img src="https://d3vqz9qyn2r1xe.cloudfront.net/imges/green-icon-form.svg" alt="" className="pt-1" />
                      <p className="fw-600 plus fs-19 pt-1">100% Confidential</p>
                    </div>
                    <div className="d-flex gap-2">
                      <img src="https://d3vqz9qyn2r1xe.cloudfront.net/imges/green-icon-form.svg" alt="" className="pt-1" />
                      <p className="fw-600 plus fs-19 pt-1">We sign NDA</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <img
                      key={num}
                      src={`https://d3vqz9qyn2r1xe.cloudfront.net/imges/formicon${num}.svg`}
                      alt=""
                      className={num === 3 ? "img-fluid pt-3" : num === 6 ? "img-fluid pt-4" : "img-fluid"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Enqueryforms;