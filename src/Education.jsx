export default function Education() {
  return (
    <div>
      <div
        id="education"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Education
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">M.Sc Computer Science</h3>
                <span className="text-white">Government Arts and Science College, Hosur</span>
                <p className="text-white mb-3">
                  <em>Oct 2021 - Sep 2023</em>
                </p>
                <p className="text-white mb-3">
                  <em>CGPA : 8.2</em>
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">B.Sc Computer Science</h3>
                <span className="text-white">Krishna Arts and Science College, Krishnagiri</span>
                <p className="text-white mb-3">
                  <em>Jul 2018 - Aug 2021</em>
                </p>
                <p className="text-white mb-3">
                  <em>CGPA : 7.6</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
