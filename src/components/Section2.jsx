function Section2() {
  const services = [
    {
      title: "Customize Strategies",
      description:
        "We understand that every business is unique. That's why we develop personalized marketing plans that align with your goals.",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon26.svg",
    },
    {
      title: "Results-Driven Approach",
      description:
        "Our strategies are backed by data and analytics to ensure you get measurable results.",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon7.svg",
    },
    {
      title: "Experienced Team",
      description:
        "With years of experience and expertise, our team is dedicated to helping your business succed.",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon27.svg",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stay informed with regular updates and detailed reports on your campaign's performance .",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon28.svg",
    },
  ];

  return (
    <div style={{ backgroundColor: "rgb(233,245,255)", padding: "40px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 text-left">
            <p className="fw-bold fs-30" style={{ color: "rgb(0, 0, 0)" }}>
             Why Choose Us ?
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-3 g-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex"
            >
              <a href={service.link} className="w-100 text-decoration-none">
                <div
                  className="px-4 py-3 h-100"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "1px solid rgb(222, 226, 230)",
                    borderBottomWidth: "4px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textAlign: "left",
                  }}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p
                      className="fw-bold fs-18 mb-0"
                      style={{ color: "rgb(0, 83, 154)" }}
                    >
                      {service.title}
                    </p>
                  </div>
                  <p
                    className="fw-medium mt-2"
                    style={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: "20px",
                      textAlign: "left",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
