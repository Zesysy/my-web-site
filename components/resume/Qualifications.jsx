const Qualifications = () => {
  return (
    <>
      <article className="textQualifications pl-md-4">
        <h4>Diplômes et Formations</h4>
        <table>
          <tbody>
            <tr className="align-top">
              <td>2020 {">"}</td>
              <td>
                <strong className="ml-1">ConcepteurJava JEE ( Spring), </strong>
                <span>Wild Code School</span> de Biarritz
              </td>
            </tr>
            <tr className="align-top">
              <td>2019 {">"}</td>
              <td>
                <strong className="ml-1">
                  Développeur Web {"&"} Web Mobile JavaScript (ReactJs/NodeJs),
                </strong>
                <span> Wild Code School</span> de Biarritz
              </td>
            </tr>
            <tr className="align-top">
              <td>2011 {">"}</td>
              <td>
                <strong className="ml-1">Diplôme d’Etat infirmier,</strong>{" "}
                <span>Institut de Formation en Soins Infirmiers</span> de
                Bayonne
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <style jsx>
        {`
          h4 {
            color: white;
          }

          span {
            color: var(--success);
            font-weight: 700;
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

            .textQualifications {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Qualifications;
