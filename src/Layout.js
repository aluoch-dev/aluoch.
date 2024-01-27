import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Home from "./sections/Home";
import About from "./sections/About"
import Portfolio from "./sections/Portfolio"
import Blog from "./sections/Blog"
import Contact from "./sections/Contact"

function Layout() {
  const navItems = [
    { id: "home", label: "HOME", link: "/", section: "#home" },
    { id: "about", label: "ABOUT", link: "/about", section: "#about" },
    { id: "portfolio", label: "PORTFOLIO", link: "/portfolio", section: "#portfolio" },
    { id: "blog", label: "BLOG", link: "/blog", section: "#blog" },
    { id: "contact", label: "CONTACT", link: "/contact", section: "#contact" },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Heading navItems={navItems} />
        <div className="flex-1 flex-row p-8 overflow-x-auto">
          <Home sectionId="home" />
          <About sectionId="about" />
          <Portfolio sectionId="portfolio" />
          <Blog sectionId="blog" />
          <Contact sectionId="contact" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;