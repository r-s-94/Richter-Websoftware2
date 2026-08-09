import Nav from "./component/nav/nav";
import Head from "./component/head/head";
import ProjectHighlights from "./component/projectHighlight/projectHighlight";
import Projects from "./component/projects/project";
import Technologies from "./component/technology/technologies";
import AboutUs from "./component/aboutUs/aboutUs";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import BackToTop from "./component/backToTop/backToTop";

export default function Roots() {
  return (
    <>
      <Nav />
      <Head />
      <ProjectHighlights />
      <Projects />
      <Technologies />
      <AboutUs />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
  /*   
      
  
   
     
    
    
     
  */
}
