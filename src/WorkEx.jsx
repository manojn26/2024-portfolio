export default function WorkEx() {
  return (
    <div>
      <div
        id="exp"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work Experience
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Web Developer Intern</h3>
                <span className="text-white">Neowep Software Technologies</span>
                <p className="text-white mb-3">
                  <em>Jun 2022 - Aug 2022</em>
                </p>
                <p className="text-gray-400 text-justify">
                  • Developed and maintained web applications using JavaScript, HTML5, CSS3, MySQL database
                </p>
                <p className="text-gray-400 text-justify mt-2">
                  • Developed responsive design that improved mobile usability
                </p>
                <p className="text-gray-400 text-justify mt-2">
                  • Assist in testing web experiences across browsers and devices to ensure a positive user experience
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
