const Qualifications = () => {
  return (
    <>
      <article className="textQualifications">
        <h4>Diplômes et Formations</h4>
        <table>
          <tbody>
            <tr className="align-top">
              <td>2020</td>
              <td>
                <strong>Formation au langage Java (JEE {"&"} Spring), </strong>
                <span>Wild Code School</span> de Biarritz (équivalent Bac+2)
              </td>
            </tr>
            <tr className="align-top">
              <td>2019</td>
              <td>
                <strong>
                  Formation de Développeur Web (JavaScript, ReactJs {"&"}{" "}
                  NodeJs),
                </strong>
                <span> Wild Code School</span> de Biarritz (équivalent Bac+2)
              </td>
            </tr>
            <tr className="align-top">
              <td>2011</td>
              <td>
                <strong>Diplôme d’Etat infirmier,</strong>{" "}
                <span>Institut de Formation en Soins Infirmiers</span> de
                Bayonne
              </td>
            </tr>
            <tr className="align-top">
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
            color: var(--secondary) !important;
            text-align: justify;
          }

          .textQualifications {
            font-size: 0.9rem;
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            h4 {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 699px) {
            h4 {
              font-size: 1.1rem;
            }

            .textQualifications,
            span {
              font-size: 0.7rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Qualifications;
