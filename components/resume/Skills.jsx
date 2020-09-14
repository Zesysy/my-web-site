import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "reactstrap";

import IconCustom from "../IconCustom";

import { icons } from "../../data/icons.data";
import { itemsDevlopment, itemsEnvironment } from "../../data/itemsSkills.data";

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
          </Col>
          <Col lg="6" md="5">
            {itemsDevlopment.map((item, key) => (
              <Fragment key={key}>
                {item.logo === "redux" ? (
                  <IconCustom id="Redux" content={icons[0].content} />
                ) : item.logo === "nextJs" ? (
                  <IconCustom
                    id="NextJs"
                    content={icons[1].content}
                    position={icons[1].position}
                  />
                ) : item.logo === "spring" ? (
                  <IconCustom
                    id="Spring"
                    content={icons[2].content}
                    box={icons[2].box}
                    size={icons[2].size}
                    position={icons[2].position}
                  />
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
            <p className="mt-1">
              Firebase - Jdbc - Jpa - Hibernate - Thymeleaf
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
