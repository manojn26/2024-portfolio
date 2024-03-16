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
            {/* 
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Data and AI Intern</h3>
                <span className="text-white">Cognitive Garage, Delhi</span>
                <p className="text-white mb-3">
                  <em>January 2023 - June 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                  Analyzed transaction data of people to identify the credit
                  risk associated with it. Built an object detection model using
                  YOLOv7 for identification of the various articles with an
                  accuracy of 95% used for loan risk prediction. Worked on
                  building a RNN Model for prediction of the diseases based on
                  symptoms which are entered one by one after each iteration, to
                  assign a score and give the most accurate prediction for the
                  entered set of symptoms.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
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
