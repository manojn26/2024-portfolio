import { useEffect, useState } from "react";

export default function Navbar() {
  const [opaque, setOpaque] = useState(false);
  useEffect(() => {
    window.onscroll = (event) => {
      if (window.scrollY > 220) {
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const handleToggleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    setClosingAnimation(false);
  };

  const handleCloseClick = () => {
    setClosingAnimation(true);
    setTimeout(() => {
      setMobileNavOpen(false);
      setClosingAnimation(false);
    }, 500);
  };

  const handleNavItemClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <>
      <div
        className={`navbar-container flex justify-between items-center h-14 px-48 py-10 md:px-24 ${opaque && "bg-slate-950"
          }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
        }}
      >

        <div className="my-logo font-medium text-white">
          <a href="#" className="home">
            MK
          </a>
        </div>
        <div className="toggle-icon text-white cur" onClick={handleToggleClick}>
          {mobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i> // Cross icon for closing
          ) : (
            <i className="fa-solid fa-bars"></i> // Bar icon for opening
          )}
        </div>

        <div className="nav-links flex font-medium text-white justify-around gap-8">


          <a href="#about-section" className="about">
            About
          </a>
          <a href="#skill-container" className="skill">
            Skills
          </a>
          <a href="#education" className="about">
            Education
          </a>
          <a href="#projects-container" className="project">
            Projects
          </a>
          <a href="#exp" className="workex">
            Exp
          </a>

          <a href="#achievements" className="certification">
            Achievements
          </a>

          <a href="#certifications-container" className="certification">
            Certifications
          </a>



        </div>
      </div>

      <div
        className={`mobile-nav bg-slate-950 px-12 py-6 h-screen w-screen ${mobileNavOpen
          ? "slide-in-from-left block"
          : closingAnimation
            ? "slide-out-to-right"
            : " hidden"
          } `}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        <div className="nav-links-mobile flex flex-col font-small text-white justify-around gap-4 mt-10">
          <a
            href="#about-section"
            className="about"
            onClick={handleNavItemClick}
          >
            About
          </a>
          <a
            href="#skill-container"
            className="skill"
            onClick={handleNavItemClick}
          >
            Skills
          </a>
          <a
            href="#education"
            className="workex"
            onClick={handleNavItemClick}
          >
            Education
          </a>
          <a
            href="#projects-container"
            className="project"
            onClick={handleNavItemClick}
          >
            Projects
          </a>
          <a
            href="#exp"
            className="publication"
            onClick={handleNavItemClick}
          >
            Exp
          </a>
          <a
            href="#achievements"
            className="certification"
            onClick={handleNavItemClick}
          >
            Achievements
          </a>
          <a
            href="#certifications-container"
            onClick={handleNavItemClick}
          >
            Certification
          </a>
        </div>
      </div>
    </>
  );
}
