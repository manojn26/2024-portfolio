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

            {/* <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Data Science Intern</h3>
                <span className="text-white">
                  Lets Grow More, eLearning Company
                </span>
                <p className="text-white mb-3">
                  <em>March 2022 - April 2022</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Worked on Machine Learning and Deep Learning Projects like
                  Stock Market Prediction, Forecasting using Stacked LSTM &
                  Music Recommendation System using various python libraries and
                  tools like Numpy, Pandas, Matplotlib, Seaborn, Sklearn,
                  Tensorflow, etc. Also developed several projects that included
                  Neural Network to read handwriting, Handwritten Equation
                  solver using CNN and ML Face Recognition to detect mood and
                  suggest songs.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">
                  Machine Learning Application Developer
                </h3>
                <span className="text-white">
                  Technocolabs Softwares, Indore
                </span>
                <p className="text-white mb-3">
                  <em>Feb 2022 - March 2022</em>
                </p>
                <p className="text-justify text-gray-400">
                  Performed EDA on a H-1B visa dataset with about 3 million
                  entries, applied Random Forest Classifier to classify &
                  predict the outcome of the H-1B Visa Applications with an
                  accuracy of 85%. Created a web interface using HTML, CSS &
                  Flask for deployment of the model on the Heroku Cloud.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
