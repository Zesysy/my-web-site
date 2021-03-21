const Experiences = () => {
  return (
    <>
      <article className="textExperience pl-md-4">
        <h4>Expériences</h4>
        <p className="textExperience">
          {"<"} décembre 2020 à aujourd'hui {"> "}
          <strong>Développeuse front-end ReactJs</strong>
          <br />
          <span>Aquao,</span> Dax
          <br />
          Application de gestion dédiée à des centres de bien-être
          <br />
        </p>
        <p className="textExperience">
          {"<"} novembre 2020 à aujourd'hui {"> "}
          <strong>
            Freelance Développeuse FullStack Javascript ReactJs / NodeJs
          </strong>
          <br />
          <span>Club Créa,</span> Biarritz
          <br />
          Plateforme de mise en relation entreprises
          <br />
        </p>
        <p className="textExperience">
          {"<"} juin/juillet 2020 {"> "}
          <strong>Développeuse Java JEE / Spring</strong>
          <br />
          <span>Follow the Market,</span> Lille
          <br />
          Projet en télétravail pour une start-up proposant un outils de suivi
          des performances sur le marché de leurs client
          <br />
        </p>
        <p className="textExperience">
          {"<"} août/novembre 2019 {"> "}
          <strong>Développeuse Javascript / ReactJs</strong>
          <br />
          <span>AudioWizard,</span> Lyon
          <br />
          Stage en télétravail dans une start-up proposant une solution pour
          réaliser le suivi médical de patients d'audioprothésistes
          <br />
        </p>
        <p className="textExperience">
          {"<"} mai/juillet 2019 {"> "}
          <strong>Développeuse Javascript / ReactJs</strong>
          <br />
          <span>InvestoWeb,</span> Bidart
          <br />
          Projet Agile afin de créer un nouvel outil de gestion pour une
          entreprise de pompe funèbre.
          <br />
        </p>
        <p className="textExperience">
          {"<"} avril 2011/ janvier 2019 {"> "}
          <strong>Infirmière Diplômée d’État</strong>
          <br />
          <span>GCS centre de cardiologie {"&"} Clinique Aguilera,</span> Bidart
          <br />
        </p>
      </article>
      <style jsx>
        {`
          h4 {
            color: white;
          }

          span {
            color: var(--success);
            font-weight: 700;
            text-indent: 15%;
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
