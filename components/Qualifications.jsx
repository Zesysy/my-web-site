const Qualifications = () => {
  return (
    <>
      <article>
        <h4>Diplômes et Formations</h4>
        <p className="testQualifications">
          <strong>Formation de Développeur Web (JavaScript et ReactJs),</strong>{" "}
          <span>Wild Code School</span> de Bidart (équivalent Bac+2)
        </p>
        <strong className="testQualifications">Cours Internet: </strong>
        <ul className="testQualifications">
          <li>
            “Apprenez à créer votre site web avec HTML5 et CSS3” {"&"} “Apprenez
            à coder avec JavaScript”, <span> OpenClassRooms.fr</span>
          </li>
          <li>
            “Introduction To JavaScript”, <span> OpenClassRooms.fr</span>
          </li>
        </ul>
        <p className="testQualifications">
          <strong>Diplôme d’Etat infirmier,</strong>{" "}
          <span>Institut de Formation en Soins Infirmiers</span> de Bayonne
        </p>
        <p className="testQualifications">
          <strong>Baccalauréat série scientifique,</strong>{" "}
          <span>lycée André Malraux</span>, de Biarritz
        </p>
      </article>
      <style jsx>
        {`
          span {
            color: pink;
            text-align: justify;
          }
          .testQualifications {
            font-size: 0.9em;
          }
          ul {
            list-style-type: "-";
          }
        `}
      </style>
    </>
  );
};

export default Qualifications;
