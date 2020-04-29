import { Fragment } from "react";
import {
  faUbuntu,
  faWindows,
  faHtml5,
  faCss3,
  faJsSquare,
  faJava,
  faReact,
  faNodeJs,
  faBootstrap,
  faGit,
  faGithub,
  faGitlab,
  faTrello,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";
import ReduxLogo from "../ReduxIcon";

const Skills = () => {
  const itemsEnvironment = [
    {
      logo: faUbuntu,
      color: "#e95420",
      text: "Usage quotidien en développement",
      title: "Ubuntu",
    },
    {
      logo: faWindows,
      color: "#0078d7",
      text: "Usage personnel",
      title: "Windows",
    },
  ];

  const itemsDevlopment = [
    { logo: faHtml5, color: "#de6e3c", title: "Html5" },
    { logo: faCss3, color: "#53a7dc", title: "CSS3" },
    { logo: faJsSquare, color: "#f1de4f", title: "JavaScript" },
    { logo: faReact, color: "#62d4fa", title: "ReactJs" },
    { logo: "redux" },
    {
      logo: faJava,
      color: "#2e68ab",
      title: "Java",
    },
    { logo: faNodeJs, color: "#43853d", title: "NodeJs" },
    { logo: faBootstrap, color: "#563d7c", title: "Bootstrap" },
  ];

  const itemsCrew = [
    { logo: faGit, color: "#f64d27", title: "Git" },
    { logo: faGithub, color: "#333", title: "Github" },
    { logo: faGitlab, color: "#fc6d26", title: "Gitlab" },
    { logo: faTrello, color: "#0079bf", title: "Trello" },
    { logo: faSlack, color: "#4A154B", title: "Slack" },
  ];

  return (
    <>
      <article>
        <h4>Compétences</h4>
        <Row className="justify-content-between m-0">
          <Col lg="6" md="5">
            <h6>Environnement</h6>
          </Col>
          <Col lg="6" md="5">
            <h6>Développement</h6>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <Col lg="6" md="5">
            <ul style={{ listStyle: "none" }}>
              {itemsEnvironment.map((item, key) => (
                <li key={key}>
                  <FontAwesomeIcon
                    icon={item.logo}
                    size="2x"
                    color={item.color}
                    className="align-middle m-2"
                    fixedWidth={true}
                    title={item.title}
                  />
                  <small>{item.text}</small>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="6" md="5">
            {itemsDevlopment.map((item, key) => (
              <Fragment key={key}>
                {item.logo === "redux" ? (
                  <ReduxLogo id="redux" />
                ) : (
                  <FontAwesomeIcon
                    icon={item.logo}
                    className="align-middle m-2"
                    size="2x"
                    color={item.color}
                    title={item.title}
                    fixedWidth={true}
                  />
                )}
              </Fragment>
            ))}
            <p className="textSkills">NextJs - Sequelize - MySql - Express</p>
          </Col>
        </Row>
        <Row className="justify-content-between m-0 mt-4">
          <Col lg="6" md="5">
            <h6>Générales</h6>
          </Col>
          <Col lg="6" md="5">
            <h6>En Équipe</h6>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <Col lg="6" md="5">
            <FontAwesomeIcon
              icon={faUserNurse}
              size="2x"
              color="red"
              className="align-middle m-2"
              fixedWidth={true}
              title="Infirmière"
            />
            <p className="textSkills">
              Gestion de l’urgence - Organisation - Rigueur - Travail en équipe
              - Empathie et sens de l’écoute - Capacité d’adaptation
            </p>
          </Col>
          <Col lg="6" md="5">
            {itemsCrew.map((item, key) => (
              <FontAwesomeIcon
                key={key}
                icon={item.logo}
                size="2x"
                color={item.color}
                className="align-middle m-2"
                fixedWidth={true}
                title={item.title}
              />
            ))}
            <p className="textSkills">
              Méthode Agile - Scrum - Kanban - Moscow (tous étudiés durant la
              formation)
            </p>
          </Col>
        </Row>
      </article>
      <style jsx>
        {`
          .textSkills {
            font-size: 0.9rem;
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            article,
            small {
              font-size: 0.9rem;
            }

            h4 {
              font-size: 1.3rem;
            }

            .textSkills {
              text-align: center;
            }
          }

          @media (max-width: 699px) {
            article,
            small {
              font-size: 0.9rem;
            }

            h4 {
              font-size: 1.1rem;
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

export default Skills;
