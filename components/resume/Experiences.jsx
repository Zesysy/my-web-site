const Experiences = () => {
  return (
    <>
      <article>
        <h4>Expériences</h4>
        <p className="textExperiences">
          <strong>Développeur Web chez AudioWizard,</strong>{" "}
          <span>août/novembre 2019</span>, <span>Lyon (stage 100% remote)</span>
          <br />
          Au sein d’une start-up en création et intégrée dans une équipe de 3
          développeurs.
        </p>
        <strong className="textExperiences">
          Projets durant la Formation à la Wild Code School,
        </strong>{" "}
        <span>février/juillet 2019</span>,<span> Bidart</span>
        <ul className="textExperiences">
          <li>Izanami Web, groupe de 5 personnes sur 2 mois.</li>
          <li>WoW-Search, groupe de 3 personnes sur 5 semaines.</li>
          <li>ROBOTICI.A BLOG, groupe de 3 personnes sur une semaine.</li>
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
            color: pink;
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
