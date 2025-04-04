function Section() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Achieve higher rankings and attract organic traffic with our comprehensive SEO strategies. From keyword research to on-page and off-page optimization, we help your website stand out on search engine results pages (SERPs).",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon26.svg",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Maximize your ROI with targeted PPC campaigns. We design and manage ads that deliver immediate results, driving traffic and generating leads on platforms like Google Ads and social media.",
      link: "/service/ecommerce-website-design-development-solutions",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon7.svg",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build meaningful connections with your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter. Our social media strategies focus on engagement, brand loyalty, and lead generation.",
      link: "/service/cms-website-design-development-solutions",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon27.svg",
    },
    {
      title: "Content Marketing",
      description:
        "Create impactful content that resonates with your audience. From blog posts to videos, our team crafts compelling material that informs, entertains, and converts.",
      link: "/service/mobile-app-design-development-solutions",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon28.svg",
    },
    {
      title: "Email Marketing",
      description:
        "Stay connected with your customers through personalized email campaigns. We help you design, execute, and analyze campaigns that nurture leads and drive sales.",
      link: "#",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon4.svg",
    },
    {
      title: "Web Design and Development",
      description:
        "Your website is the foundation of your digital presence. Our web design and development services ensure your site is user-friendly, responsive, and optimized for conversion.",
      link: "/service/website-design-development-solutions",
      imgSrc: "https://d3vqz9qyn2r1xe.cloudfront.net/imges/Us-icon29.svg",
    },
  ];

  return (
    <div style={{ backgroundColor: "rgb(208,233,255)", padding: "40px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 text-left">
            <p className="fw-bold fs-30" style={{ color: "rgb(0, 0, 0)" }}>
              Comprehensive Digital Marketing Solutions Tailored For You
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

export default Section;
