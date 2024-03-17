import publications from "./publications";
export default function Achievements() {
  return (
    <div>
      <div
        id="achievements"
        className="publication-container bg-slate-900 pb-20 px-20 pt-5"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold mb-14">
          Achievements
        </h3>

        <ul className="publication-list" style={{ listStyleType: "none" }}>
          {publications.map((publication, index) => (
            <li
              key={index}
              className="publication-item"
              style={{
                marginBottom: "20px",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <h4 className="text-sky-500 font-bold text-lg mt-3">
                {publication.Title}
              </h4>
              <p className="text-white"> {publication.Authors}</p>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
