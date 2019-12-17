import { Row, Col } from "reactstrap";

import Card from "./utils/Card";

const PortfolioComponent = () => {
  const items = [
    {
      title: "WildCircus",
      subtitle: "Jan/19 : HTML5 - CSS3",
      preview: "/static/images/wildCircus.webp",
      link: "https://zesysy.github.io/wildCircus/",
      description:
        "Pour être admis à la WCS il était nécessaire de s'autoformer aux langages de base et de réaliser un site en respectant le thème et une liste de recommandations"
    },
    {
      title: "Robotici.a blog",
      subtitle: "Mars/19 : HTML5 - CSS3 - Bootstrap",
      preview: "/static/images/roboticiBlog.webp",
      link: "https://zesysy.github.io/robotici.a_blog/",
      description:
        "Premier projet de formation en groupe de trois personnes réalisé en une semaine. Mise en application des premiers apprentissages de la formation, dont l'utilisation de bootstrap et le travail du versionnage de notre projet avec Git"
    },
    {
      title: "Hackathon Easter",
      subtitle: "Avr/19 : Javascript - ReactJs",
      preview: "/static/images/easterHackathon.webp",
      description:
        "Hackathon de 24h en groupe de cinq personnes. Sur le thème de pâques, projet libre en faisant appel à une API créée par la WCS (images d'œufs, de personnages, de rareté, de taille... ). Nous avons créé un jeu de recherche d'œufs cachés qui apparaissaient de façon aléatoire sur une image, et de taille différente en fonction de leur rareté. L'API n'ayant pas été maintenue, nous n'avons pu le déployer"
    },
    {
      title: "WoW Search",
      subtitle: "Avr/19 : Javascript - ReactJs",
      preview: "/static/images/wowSearch.webp",
      link: "https://wow-search-engine.netlify.com/",
      description:
        "Deuxième projet de formation en groupe de trois personnes réalisé sur cinq semaines. Notre client (le formateur) souhaitez pouvoir retrouver plus facilement les données de ses personnages du jeu World Of Warcraft, nous lui avons proposé un moteur de recherche utilisant l'API de Raider.io. Mise en pratique de notre apprentissage de Javascript et ReactJs, tout en découvrant les méthodes Scrum et Kanban."
    },
    {
      title: "Izanami Web",
      subtitle: "Mai/19 : Javascript - ReactJs - NodeJs",
      preview: "/static/images/izanamiWeb.webp",
      description:
        "Troisième projet de formation en groupe de cing personnes réalisé sur deux mois. InvestoWeb, notre client, souhaitait proposait un nouvel outils de travail à un de leur collaborateur, une entreprise de pompes funèbres. Nous avons travaillé à la création de formulaires récupérant les informations des familles, et devions les récupérer sur notre base de données. Cette dernière nous permettrait ensuite de remplir des documents au format PDF, qui était une demande du client. Nous avons pu par nous-même chercher de nouvelles librairies à utiliser dans notre projet (ReactPdf, ReduxForm), tout en manipulant Redux. Le projet ayant été récupéré par le client, je n'ai pas la possibilité de le montrer"
    },
    {
      title: "Petite Carte",
      subtitle: "Jui/19 :  HTML5 - CSS3",
      preview: "/static/images/littleCard.webp",
      link: "https://zesysy.github.io/postcard/",
      description:
        "Petite carte animée réalisée durant ma recherche de stage pour une candidature spontanée dans une entreprise dont le produit sont les carte postales"
    },
    {
      title: "AudioWizard",
      subtitle: "Aoû/19 : Javascript - ReactJs - Php",
      link: "https://app.audiowizard.fr/#/",
      preview: "/static/images/audioWizard.webp",
      description:
        "Lors de mon stage, nous avons travaillé à la création d'une application Web qui serait un outils de suivi de patients d'audioprothésistes. Tout en respectant le Règlement à la Protection de la Donnée, et pensée pour une utilisation bureau et tablette, nous avons développé la possibilité d'enregistrer un nouvel utilisateur, d'enregistrer un patient en le faisant évoluer durant les étapes de sa prise en charge, et cela en liant notre front en ReactJs et notre back en Php. J'ai travaillé tout au long de ce stage à distance, avec des daily en visioconférence, et une grande autonomie de travail. Le site est accessible mais nécessite bien entendu d'avoir un code d'authentification."
    }
  ];

  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default PortfolioComponent;
