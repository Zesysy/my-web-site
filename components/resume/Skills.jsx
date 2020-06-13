import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";

import IconCustom from "../IconCustom";

import { icons } from "../../data/icons.data";
import { itemsDevlopment, itemsCrew, itemsEnvironment } from "../../data/itemsSkills";

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
                  <IconCustom id="redux" content={icons[0].content} />
                ) : item.logo === "nextJs" ? (
                  <IconCustom id="NextJs" content={icons[1].content} position={icons[1].position} />
                ) : item.logo === "spring" ? (
                  <IconCustom id="Spring" content={icons[2].content} size={icons[2].size} position={icons[2].position} />
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
