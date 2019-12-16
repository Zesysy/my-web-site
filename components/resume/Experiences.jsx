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
        <strong className="textExperiences">
          Projets durant la Formation à la Wild Code School,
        </strong>{" "}
        <span>février/juillet 2019</span>,<span> Bidart</span>
        <ul className="textExperiences">
          <li>Izanami Web, groupe de cinq personnes sur deux mois.</li>
          <li>WoW-Search, groupe de trois personnes sur cinq semaines.</li>
          <li>ROBOTICI.A BLOG, groupe de trois personnes sur une semaine.</li>
        </ul>
        <p className="textExperiences">
          <strong>
            Infirmière Diplômée d’État, GCS centre de cardiologie {"&"} Clinique
            Aguilera,
          </strong>{" "}
          <span>avril 2011 à janvier 2019 </span>, <span>Bayonne</span> {"&"}{" "}
          <span>Biarritz</span>
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
        `}
      </style>
    </>
  );
};

export default Experiences;
