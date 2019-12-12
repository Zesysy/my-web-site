const Qualifications = () => {
  return (
    <>
      <article>
        <h4>Diplômes et Formations</h4>
        <table className="testQualifications">
          <tbody>
            <tr>
              <td>2019</td>
              <td>
                <strong>
                  Formation de Développeur Web (JavaScript, ReactJs {"&"}{" "}
                  NodeJs),
                </strong>{" "}
                <span>Wild Code School</span> de Bidart (équivalent Bac+2)
              </td>
            </tr>
            <tr className="align-top">
              <td>2018/19</td>
              <td>
                <strong>Cours Internet: </strong>
                <ul className="testQualifications">
                  <li>
                    “Apprenez à créer votre site web avec HTML5 et CSS3” {"&"}{" "}
                    “Apprenez à coder avec JavaScript”,{" "}
                    <span> OpenClassRooms.fr</span>
                  </li>
                  <li>
                    “Introduction To JavaScript”,{" "}
                    <span> OpenClassRooms.fr</span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>2011</td>
              <td>
                <strong>Diplôme d’Etat infirmier,</strong>{" "}
                <span>Institut de Formation en Soins Infirmiers</span> de
                Bayonne
              </td>
            </tr>
            <tr>
              <td>2006</td>
              <td>
                <strong>Baccalauréat série scientifique,</strong>{" "}
                <span>lycée André Malraux</span>, de Biarritz
              </td>
            </tr>
          </tbody>
        </table>
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
        `}
      </style>
    </>
  );
};

export default Qualifications;
