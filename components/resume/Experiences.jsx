const Experiences = () => {
  return (
    <>
      <article className="textExperience pl-md-4">
        <h4>Expériences</h4>
        <table>
          <tbody>
            <tr className="align-top">
              <td>06/20 - 07/20 (1 mois)</td>
              <td>
                <strong className="ml-1">
                  Développeuse Java JEE / Spring,{" "}
                </strong>
                <span>Follow the Market</span>, Lille
                <br />
                Stage en télétravail pour une start-up proposant un outils de
                suivi des performances sur le marché de leurs clients{" "}
              </td>
            </tr>
            <tr className="align-top">
              <td>08/19 - 11/19 (4 mois)</td>
              <td>
                <strong className="ml-1">
                  Développeuse Javascript / ReactJs,{" "}
                </strong>
                <span>AudioWizard</span>, Lyon
                <br />
                Stage en télétravail dans une start-up proposant une solution
                pour réaliser le suivi médical de patients d'audioprothésistes
              </td>
            </tr>

            <tr className="align-top">
              <td>2011 - 2019</td>
              <td>
                <strong className="ml-1"> Infirmière Diplômée d’État,</strong>{" "}
                <span> GCS centre de cardiologie {"&"} Clinique Aguilera</span>{" "}
                , Bayonne
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

          .textExperience {
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

            .textExperience,
            span {
              font-size: 0.7rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Experiences;
