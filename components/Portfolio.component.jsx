import { Row, Col } from "reactstrap";

import Card from "./Card";

const PortfolioComponent = () => {
  const items = [
    {
      title: "WildCircus",
      subtitle: "Test d'entrée à la Wild Code School => HTML5 & CSS3",
      preview: "/static/images/wildCircus.webp",
      link: "https://zesysy.github.io/wildCircus/",
      description: "lorem ipsum"
    },
    {
      title: "Robotici.a blog",
      subtitle:
        "Premier projet de formation à la WCS => HTML5, CSS3 et Bootstrap",
      preview: "/static/images/roboticiBlog.webp",
      link: "https://zesysy.github.io/robotici.a_blog/",
      description: "lorem ipsum"
    },
    {
      title: "Hackathon Easter",
      subtitle: "Projet de Hackathon => Javascript, ReactJs",
      preview: "/static/images/easterHackathon.webp",
      description: "lorem ipsum"
    },
    {
      title: "WoW Search",
      subtitle: "Projet de formation à la WCS => Javascript, ReactJs",
      preview: "/static/images/wowSearch.webp",
      link: "https://wow-search-engine.netlify.com/",
      description: "lorem ipsum"
    },
    {
      title: "Izanami Web",
      subtitle:
        "Projet client au cour de la formation à la WCS => Javascript, ReactJs",
      preview: "/static/images/izanamiWeb.webp",
      description: "lorem ipsum"
    },
    {
      title: "AudioWIzard",
      subtitle: "Participation à la création de l'application durant un stage",
      link: "https://app.audiowizard.fr/#/",
      preview: "/static/images/audioWizard.webp",
      description: "lorem ipsum"
    },
    {
      title: "Petite Carte",
      subtitle: "Petit essai réalisé lors d'une candidature",
      preview: "/static/images/littleCard.webp",
      link: "https://zesysy.github.io/postcard/",
      description: "lorem ipsum"
    }
  ];

  return (
    <>
      <Row className="mt-3 m-0">
        {items.map(({ title, subtitle, preview, link, description }, key) => (
          <Col lg="3" className="mb-3 mt-3 " key={key}>
            <Card
              title={title}
              subtitle={subtitle}
              preview={preview}
              link={link}
              description={description}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PortfolioComponent;
