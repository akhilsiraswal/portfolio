import React from "react";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonial";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import resumeData from "./resumeData";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
