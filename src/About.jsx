import profileImg from "./assets/profile-pic.png";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Manoj<span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Bangalore,
            holding a
            <span className="text-sky-500">
              {" "}
              M.Sc  degree in Computer Science
            </span>{" "}
            with
            <span className="text-sky-500">
              {" "}
              8.2 CGPA
            </span>
          </p>

          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            I'm  a web alchemist crafting captivating online experiences. {" "}
            With expertise in <span className="text-sky-500">
              React, JavaScript, Node.js, MySQL, Git, and MongoDB.


            </span>

            <br />
            <br />

            I specialize in <span className="text-sky-500">
              turning ideas into pixel-perfect realities.</span> From sleek designs to lightning-fast performance, I'm your go-to for all things web. Let's collaborate and elevate your online presence to new heights!
          </p>
        </div>
        <img
          src={profileImg}
          alt="manoj-img"
          className=" text-white img-manoj"
          style={{
            width: "50%",
            height: "20rem",
            marginRight: "5rem"

          }}
        />
      </div>
    </>
  );
}
