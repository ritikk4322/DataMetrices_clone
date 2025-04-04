function Question() {
    return (
      <div className="mt-lg-5 pt-4 pb-4">
        <section className="faq-section "style={{ backgroundColor: "rgb(208,233,255)", padding: "40px 0" }}>
          <div className="container">
            <div className="faq-contents">
              <div className="text-center">
                <p className=" featurette-heading fw-bold fs-38 plus font-23" style={{ color: "rgb(34, 34, 34)" }}>
                  Frequently Asked Questions
                </p>
                <p className="fw-400 fs-16 plus" style={{ color: "rgb(79, 79, 79)" }}>
                  We provide answers to common questions about our products/services.
                </p>
              </div>
  
              <div id="faq-container">
                {faqData.map((faq, index) => (
                  <div className="faq-qa" key={index}>
                    <div className="question-wrapper d-flex justify-content-between">
                      <p className="fw-500 fs-18 plus" style={{ color: "rgb(34, 34, 34)" }}>
                        {index + 1}. {faq.question}
                      </p>
                      <button className="toggle-btn1">{faq.isOpen ? "▲" : "▼"}</button>
                    </div>
                    <div className="fs-16 fw-400 plus" style={{ display: faq.isOpen ? "block" : "none", color: "rgb(79, 79, 79)" }}>
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  const faqData = [
    {
      question: "What is Web Development Company?",
      answer: "A website development company is your go-to partner for creating, designing, and maintaining websites tailored to your business needs. With a skilled team of web developers, designers, programmers, and SEO experts, they work together to build websites that not only look great but perform exceptionally well.These companies offer a variety of services, such as website design, web application development, e-commerce solutions, CMS development, SEO, and ongoing website maintenance.The cost of hiring a website development company depends on factors like project complexity, features, customization, timeline, and expertise.",
      isOpen: true,
    },
    {
      question: "How to Hire a Website Development Company?",
      answer: "We work with clients from various industries, including information technology, healthcare, e-commerce, real estate, education, and professional services.",
      isOpen: false,
    },
    {
      question: "How Much Does It Cost to Hire a Web development Company in India?",
      answer: "Our SEO service includes comprehensive strategies such as keyword research, on-page optimization, technical SEO, and off-page SEO.",
      isOpen: false,
    },
    {
      question: "How Much Does It Cost to Develop a wesite ?",
      answer: "Getting started with DataMetricks is easy. Simply contact us through our website or fill out the form on our home page.",
      isOpen: false,
    },
    {
      question: "Which is the Best Website Development Company in Indai?",
      answer: "Getting started with DataMetricks is easy. Simply contact us through our website or fill out the form on our home page.",
      isOpen: false,
    },
  ];
  
  export default Question;
  