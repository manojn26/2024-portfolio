// import ParticleNew from "./ParticlesNew";

import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
      // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center">
          Manoj Kumar <span className="text-sky-500">N</span>
        </p>
        <p className="title text-white text-2xl pt-5">
          Software Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:manojcsengineer@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1aEbk29IHXw2aeYDTs2P_piFMJ8DfM3A3/view?usp=sharing"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/manojn26/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/manojn26" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/manoj_feb" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>

          <a href="https://hashnode.com/@manojn26" target="_blank">
            <i className="fa-brands fa-hashnode text-white"></i>
          </a>

          <a href="https://www.instagram.com/_its__me__manoj/" target="_blank">
            <i className="fa-brands fa-instagram  text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
