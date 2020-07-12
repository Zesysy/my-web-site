const Experiences = () => {
  return (
    <>
      <article>
        <h4>Expériences</h4>
        <p className="textExperiences">
          <strong>Développeur Web chez AudioWizard,</strong>{" "}
          <span>août/novembre 2019</span>, <span>Lyon (stage 100% remote)</span>
          <br />
          Au sein d’une start-up en création et intégrée dans une équipe de
          trois développeurs.
        </p>

        <p className="textExperiences">
          <strong>
            Infirmière Diplômée d’État, GCS centre de cardiologie {"&"} Clinique
            Aguilera,
          </strong>{" "}
          <span>2011/2019 </span>
        </p>
      </article>
      <style jsx>
        {`
          span {
            color: var(--secondary) !important;
            text-align: justify;
          }

          .textExperiences {
            font-size: 0.9em;
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            h4 {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 699px) {
            article {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Experiences;
