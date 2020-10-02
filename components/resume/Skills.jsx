import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "reactstrap";

import {
  itemsBack,
  itemsEnvironment,
  itemsFront,
} from "../../data/itemsSkills.data";

const Skills = () => {
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
            <p className="mt-1">
              {itemsEnvironment.map((item, key) => (
                <Fragment key={key}>
                  <FontAwesomeIcon
                    icon={item.logo}
                    size="2x"
                    color={item.color}
                    className="align-middle m-2"
                    fixedWidth={true}
                    title={item.title}
                  />
                  <small>{item.text}</small>
                </Fragment>
              ))}
              - Agile - Kanban
            </p>
          </Col>
          <Col lg="6" md="5">
            <p className="mt-1">
              Front :
              {itemsFront.map((item, key) => (
                <Fragment key={key}>
                  <FontAwesomeIcon
                    icon={item.logo}
                    className="align-middle m-2"
                    size="2x"
                    color={item.color}
                    title={item.title}
                    fixedWidth={true}
                  />
                </Fragment>
              ))}
              - NextJs - Redux - Thymeleaf
            </p>
            <p className="mt-1">
              Back :
              {itemsBack.map((item, key) => (
                <Fragment key={key}>
                  <FontAwesomeIcon
                    icon={item.logo}
                    className="align-middle m-2"
                    size="2x"
                    color={item.color}
                    title={item.title}
                    fixedWidth={true}
                  />
                </Fragment>
              ))}
              - Express - MySQL - Jdbc - Jpa - Hibernate - Firebase
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between m-0 mt-4">
          <Col lg="6" md="5">
            <h6>Générales</h6>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <Col lg="6" md="5">
            <p className="textSkills">
              Gestion de l’urgence - Organisation - Rigueur - Travail en équipe
              - Empathie et sens de l’écoute - Capacité d’adaptation
            </p>
          </Col>
        </Row>
      </article>

      <style jsx>
        {`
          h4,
          h6 {
            color: white;
          }

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
